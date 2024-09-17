Please scaffold a vite/React app that implements Single Document Interface. I expect the main view to contain a menu bar `<Navigation>` with File menu at the top, and client area. The SDI model should include:
- an AppDocument interface
- a DocumentManager singleton exposing the following state:
    - `document?: AppDocument` - currently opened document, if any
    - `file?: string` - filesystem path for saving the document, if assigned (i.e. saved at least once)
    - `modified: boolean`
- a CommandEnabler that will be used to enable/disable relevant UI commands (Close, Save, Save As...)
  The enabled state of the menu items in the File menu should be controlled by the CommandEnabler.
  The client area should (for the scaffolding) display information about the DocumentManager state: whether a document is opened, its assigned file, and modified state.

Use primereact for basic components, primeflex for layout and primeicons for icons.
