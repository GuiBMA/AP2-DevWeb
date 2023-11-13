if (sessionStorage.getItem('token')){
    document.getElementById('secreta').style.display = 'block';
    document.getElementById('formulario').style.display = 'none';
} else {
    document.getElementById('secreta').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
}

function verificarSenha() {
    const senhaUsuario = document.getElementById('senha').value;
    const senhaCorreta = 'd93591bdf7860e1e4ee2fca799911215'

    if (hex_md5(senhaUsuario) === senhaCorreta) {
        sessionStorage.setItem('token', 'valido')
        window.location = "https://guibma.github.io/AP2-DevWeb/pagina.html";
    } else {
        alert('Senha incorreta!'); 
    }

}

const limpaToken = () => {
    sessionStorage.removeItem('token');
    window.location = 'https://guibma.github.io/AP2-DevWeb/';
}