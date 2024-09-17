import { makeAutoObservable } from 'mobx';
import { AppDocument } from './AppDocument';

class DocumentManager {
    document = undefined; // Current document (instance of AppDocument)
    file = undefined;     // File path (string)
    modified = false;     // Boolean indicating if the document has unsaved changes

    constructor() {
        makeAutoObservable(this);
    }

    openDocument(content = '', file = undefined) {
        this.document = new AppDocument(content);
        this.file = file;
        this.modified = false;
    }

    closeDocument() {
        this.document = undefined;
        this.file = undefined;
        this.modified = false;
    }

    modifyDocument(newContent) {
        if (this.document) {
            this.document.content = newContent;
            this.modified = true;
        }
    }

    saveDocument() {
        if (this.document) {
            // Implement save logic here (e.g., write to file system)
            this.modified = false;
        }
    }

    saveDocumentAs(file) {
        if (this.document) {
            this.file = file;
            this.saveDocument();
        }
    }
}

export const documentManager = new DocumentManager();
