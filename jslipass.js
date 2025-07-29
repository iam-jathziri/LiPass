function mostrarPantalla(id) {
      document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
      document.getElementById(id).classList.add('activa');
}

document.addEventListener('DOMContentLoaded', () => {

      document.getElementById('btnFacebook').addEventListener('click', () => {
      window.open('https://www.facebook.com', '_blank');
    });
      document.getElementById('btnGoogle').addEventListener('click', () => {
      window.open('https://accounts.google.com', '_blank');
    });

      document.getElementById('btnIngresar').addEventListener('click', () => {
      mostrarPantalla('pantalla4');
    });

      document.getElementById('noPuedesIngresar').addEventListener('click', () => {
      alert('Envia un correo a lipass@gmail.com');
    });
      document.getElementById('cuentaNueva').addEventListener('click', () => {
     alert('Crear una cuenta nueva');
    });
});

document.getElementById('btnIzquierda')?.addEventListener('click', () => {
  mostrarPantalla('pantalla11');
});

document.getElementById('btnDerecha')?.addEventListener('click', () => {
  mostrarPantalla('pantalla12');
});

document.querySelector('.btnInfo')?.addEventListener('click', () => {
  mostrarPantalla('pantalla13');
});

document.querySelector('.btnNoti')?.addEventListener('click', () => {
  mostrarPantalla('pantalla14');
});

document.querySelector('.btnCuenta')?.addEventListener('click', () => {
  mostrarPantalla('pantalla15');
});

document.querySelectorAll('.btnVolver12').forEach(btn => {
  btn.addEventListener('click', () => mostrarPantalla('pantalla12'));
});
