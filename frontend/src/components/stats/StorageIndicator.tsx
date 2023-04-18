import FixedProgressBar from "components/others/progress/staticProgress";
import React from "react";


const StorageIndicator = () => {
  return (
    <section>
        <div>
            <span>250MB</span>
            <span>500Mb</span>
        </div>
        <FixedProgressBar />
    </section>
  );
}

export default StorageIndicator;
