async function copydiscord() {
  try {
    await navigator.clipboard.writeText("luma#9333");
    ds.style.display = "block";
    setTimeout("ds.style.display='none'", 2000);
  } catch (err) {
    console.error("Ошибка: ", err);
  }
}
async function copydiscord1() {
  try {
    await navigator.clipboard.writeText("дескорд");
    ds.style.display = "block";
    setTimeout("ds.style.display='none'", 2000);
  } catch (err) {
    console.error("Ошибка: ", err);
  }
}
