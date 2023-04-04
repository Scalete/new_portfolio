import React from 'react';

const DownloadButton = () => {
    const fileUrl = '/resume.docx';

    return (
        <a href={fileUrl} className="action main" download="resume.docx">Download Resume</a>
    );
};

export default DownloadButton;