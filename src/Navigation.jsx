// src/Navigation.jsx
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { observer } from 'mobx-react-lite';
import { documentManager } from './DocumentManager';
import { commandEnabler } from './CommandEnabler';

const Navigation = observer(() => {
    const items = [
        {
            label: 'File',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-file',
                    command: () => {
                        documentManager.openDocument();
                    },
                },
                {
                    label: 'Open',
                    icon: 'pi pi-fw pi-folder-open',
                    command: () => {
                        // Implement open logic here
                        documentManager.openDocument('Opened content', 'opened-file.txt');
                    },
                },
                { separator: true },
                {
                    label: 'Save',
                    icon: 'pi pi-fw pi-save',
                    disabled: !commandEnabler.canSave,
                    command: () => {
                        documentManager.saveDocument();
                    },
                },
                {
                    label: 'Save As...',
                    icon: 'pi pi-fw pi-save',
                    disabled: !commandEnabler.canSaveAs,
                    command: () => {
                        // Implement save as logic here
                        documentManager.saveDocumentAs('saved-as-file.txt');
                    },
                },
                { separator: true },
                {
                    label: 'Close',
                    icon: 'pi pi-fw pi-times',
                    disabled: !commandEnabler.canClose,
                    command: () => {
                        documentManager.closeDocument();
                    },
                },
            ],
        },
    ];

    return <Menubar model={items} />;
});

export default Navigation;