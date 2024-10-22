import { sheets } from "@googleapis/sheets";

async function main() {
    const api = sheets({version: "v4"})
    // batchClearはない
    // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request?hl=ja#UpdateCellsRequest
    await api.spreadsheets.batchUpdate({
        auth: {} as any,
        spreadsheetId: '',
        requestBody: {
            requests: [{
                updateCells: {
                    rows: [],
                    range: {
                        sheetId: 1,
                    },
                },
                appendCells: {
                    sheetId: 1,
                    rows: [],
                }
            }]
        },
    });
}