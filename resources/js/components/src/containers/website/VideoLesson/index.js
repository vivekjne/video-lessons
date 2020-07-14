import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Player from "@vimeo/player";
import VideoContent from "./VideoContent";
import { useParams } from "react-router-dom";
import lessonClient from "../../../api/lessonClient";
import subjectClient from "../../../api/subjectClient";

let callApi = true;
let player;
export default function VideoLesson() {
    const videoRef = React.useRef(null);
    const theme = useTheme();

    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [lessonData, setLessonData] = React.useState(null);

    const { subjectId, lessonId } = useParams();

    async function inititializeVimeoListeners(video_url) {
        var options = {
            url: video_url,
            // width: "100%",
            height: videoRef.current.offsetHeight,
            loop: false
        };
        console.log(videoRef);

        player = new Player(videoRef.current, options);
        // player.setVolume(0);

        player.on("play", function() {
            console.log("played the video!");
        });

        player.on("timeupdate", function(e) {
            console.log("timeupdate", e);

            if (Number.parseInt(e.seconds) % 5 == 0 && callApi) {
                callApi = false;
                setTimeout(() => {
                    console.log("Calling api");
                    callApi = true;
                }, 1000);
            }
        });

        player.getVideoTitle().then(function(title) {
            console.log("title:", title);
        });
    }

    async function fetchSubject() {
        try {
            const response = await subjectClient.getSubject(subjectId);
            const responseLesson = await lessonClient.getLesson(lessonId);
            setData(response.data.data);
            setLessonData(responseLesson.data.data);
            inititializeVimeoListeners(responseLesson.data.data.video_url);
            console.log({ response, responseLesson });
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    async function onLessonClick(lesson) {
        player.destroy();
        inititializeVimeoListeners(lesson.video_url);
        player.play();
    }

    async function initialize() {
        fetchSubject();
    }
    React.useEffect(() => {
        initialize();
    }, []);

    return (
        <div>
            <div
                style={{
                    width: "75%",
                    height: "60vh",
                    background: "#000",
                    padding: "4px 0px"
                }}
            >
                <div
                    id="vimeo-player"
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    ref={videoRef}
                ></div>
                {/* <iframe
                    src="https://player.vimeo.com/video/399275973"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    ref={videoRef}
                ></iframe> */}
            </div>

            <div
                style={{
                    position: "fixed",
                    top: theme.mixins.toolbar.minHeight,
                    left: "75%",
                    right: 0,
                    bottom: 0
                    // background: "red"
                }}
            >
                {!loading && (
                    <VideoContent onLessonClick={onLessonClick} data={data} />
                )}
            </div>
        </div>
    );
}
