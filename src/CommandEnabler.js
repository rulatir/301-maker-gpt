// src/CommandEnabler.js
import { makeAutoObservable } from 'mobx';
import { documentManager } from './DocumentManager';

class CommandEnabler {
    constructor() {
        makeAutoObservable(this);
    }

    get canClose() {
        return documentManager.document !== undefined;
    }

    get canSave() {
        return documentManager.document !== undefined && documentManager.modified;
    }

    get canSaveAs() {
        return documentManager.document !== undefined;
    }
}

export const commandEnabler = new CommandEnabler();