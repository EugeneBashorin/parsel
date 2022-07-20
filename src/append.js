export const appendContent = (placeToPaste, content) => {
    placeToPaste.insertAdjacentHTML("afterbegin", content);
}