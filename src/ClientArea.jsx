// src/ClientArea.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { documentManager } from './DocumentManager';

const ClientArea = observer(() => {
    return (
        <div className="p-4">
            {documentManager.document ? (
                <div>
                    <h2>Document is Open</h2>
                    <p>
                        <strong>File:</strong> {documentManager.file || 'Untitled'}
                    </p>
                    <p>
                        <strong>Modified:</strong> {documentManager.modified ? 'Yes' : 'No'}
                    </p>
                    <p>
                        <strong>Content:</strong> {documentManager.document.content}
                    </p>
                    <button
                        className="p-button p-component p-button-secondary"
                        onClick={() => documentManager.modifyDocument('Modified content')}
                    >
                        Modify Document
                    </button>
                </div>
            ) : (
                <h2>No Document is Open</h2>
            )}
        </div>
    );
});

export default ClientArea;