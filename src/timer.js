import React from "react";
function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    setTime(time - 5);
  }, []);
  return (
    <div>
      <h3>
        {time}초<button>1씩 올려주세요!</button>
      </h3>
    </div>
  );
}
export default TimerComponent;
