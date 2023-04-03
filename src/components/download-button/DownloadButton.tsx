import React from 'react';

const DownloadButton = () => {
    const handleDownload = () => {
        const url = '/resume.docx';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.docx');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <button className="action main" onClick={handleDownload}>Download Resume</button>
    );
};

export default DownloadButton;