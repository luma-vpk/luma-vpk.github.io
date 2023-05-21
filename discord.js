async function copydiscord() {
        try {
            await navigator.clipboard.writeText('luma#9333');
            ds.style.display='block';
            setTimeout("ds.style.display='none'", 2000);
        }
        catch (err) {
            console.error('Ошибка: ', err);
        }
}
