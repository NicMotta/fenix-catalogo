export default function Checker ({code, storage, redirect, login}) {
  const storageCode = localStorage.getItem(storage);

  if (!storageCode) {
    return window.location.href = login;
  }

  if (storageCode !== code) {
    return window.location.href = redirect;
  }
};