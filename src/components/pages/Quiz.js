import Answers from "../partials/Answers";
import MiniPlayer from "../partials/MiniPlayer";
import ProgressBar from "../partials/ProgressBar";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple ProgressBar</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
