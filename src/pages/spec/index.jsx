import React, { useState, useEffect } from "react";

const PCInfo = () => {
  const [info, setInfo] = useState(null);

  const showInfo = () => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const appVersion = navigator.appVersion;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const deviceMemory = navigator.deviceMemory || "N/A"; // In GB
    const connectionType = navigator.connection
      ? navigator.connection.effectiveType
      : "N/A";

    const pcInfo = {
      userAgent,
      platform,
      appVersion,
      screenWidth,
      screenHeight,
      deviceMemory,
      connectionType,
    };

    setInfo(pcInfo);
  };

  useEffect(() => {
    showInfo();
  }, []);
  
  return (
    <div>
      <h1>PC Information</h1>
      {info && (
        <div style={{ marginTop: "20px" }}>
          <strong>User Agent:</strong> {info.userAgent}
          <br />
          <strong>Platform:</strong> {info.platform}
          <br />
          <strong>App Version:</strong> {info.appVersion}
          <br />
          <strong>Screen Width:</strong> {info.screenWidth}px
          <br />
          <strong>Screen Height:</strong> {info.screenHeight}px
          <br />
          <strong>Device Memory:</strong> {info.deviceMemory} GB
          <br />
          <strong>Connection Type:</strong> {info.connectionType}
          <br />
        </div>
      )}
    </div>
  );
};

export default PCInfo;
