import "../../styles/Body.css";
import React, { useEffect, useState } from "react";

import { BsFillTerminalFill } from "react-icons/bs";

function Body() {
  // Initialize function
  useEffect(() => {}, []);

  return (
    <div>
      <div id="introduccion">{Requisitos()}</div>
      <div id="primeros-pasos">
        {InstalarDevTools()}
        {GenerarToken()}
      </div>
      <div id="comandos-gulp">{ComandosBasicos()}</div>
    </div>
  );
}

function Requisitos() {
  return (
    <div className="category-content" id="requisitos">
      <p className="tittle"> Requisitos</p>
      {InstalarNPM()}
    </div>
  );
}

function InstalarNPM() {
  return (
    <div className="secondary-content">
      <p className="sub-tittle">Instalar NPM</p>
      <div className="description">
        <p>
          Para instalar npm primero debemos de instalar{" "}
          <a href="https://nodejs.org/es/download">Node</a>, luego debemos de
          instalar{" "}
          <a href="https://github.com/coreybutler/nvm-windows/releases">NVM</a>{" "}
          descargamos y ejecutamos el archivo <a>nvm-setup.exe</a>. <br />
          Para finalizar ejecutamos el siguiente comando en la consola:
        </p>
        <div className="code">
          <div className="header-code">
            <BsFillTerminalFill />
          </div>
          <div className="content-code">npm install -g npm@7.7.2</div>
        </div>
      </div>
    </div>
  );
}

function InstalarDevTools() {
  return (
    <div className="category-content" id="instalar-dev-tools">
      <p className="tittle">Instalar Dev TOOls</p>
      {DescargarTheme()}
      {DescargarExtensiones()}
      {GenerarAmbiente()}
    </div>
  );
}

function DescargarTheme() {
  return (
    <div className="secondary-content">
      <p className="sub-tittle">Descargar Theme</p>
      <div className="description">
        <p>
          Para descargar el theme debemos de descargar el archivo que
          encontramos al buscar <a>themedev</a> en la global search del backend
          en Netsuite
        </p>
      </div>
    </div>
  );
}

function DescargarExtensiones() {
  return (
    <div className="secondary-content">
      <p className="sub-tittle">Descargar Extensiones</p>
      <div className="description">
        <p>
          Para descargar las extensiones debemos de descargar el archivo que
          encontramos al buscar <a>extensiondev</a> en la global search del
          backend en Netsuite
        </p>
      </div>
    </div>
  );
}

function GenerarAmbiente() {
  return (
    <div className="secondary-content">
      <p className="sub-tittle">Generar Ambiente</p>
      <div className="description">
        <p>
          Luego de haber descargado las dev tools debemos de extraer ambos
          archivos y ejecutar en las carpetas generadas el siguiente comando:
        </p>
        <div className="code">
          <div className="header-code">
            <BsFillTerminalFill />
          </div>
          <div className="content-code">npm i</div>
        </div>
      </div>
    </div>
  );
}

function GenerarToken() {
  return (
    <div className="category-content" id="generar-token">
      <p className="tittle">Generar Token</p>
      <div className="secondary-content">
        <p className="sub-tittle">*Debemos de estar logueados en el backend*</p>
        <div className="description">
          <p>
            Luego de haber ejecutado el comando anterior podemos obtener el
            theme y las extensiones de Netsuite, para hacer esto debemos de
            ejecutar los comandos:
          </p>
          <div className="code">
            <div className="header-code">
              <BsFillTerminalFill />
            </div>
            <div className="content-code">gulp theme:fetch</div>
            <div className="content-code">gulp extension:fetch</div>
          </div>
          <p>
            Al ejecutar estos comandos el sistema te pedira que selecciones un
            token, seleccionamos la opcion de <a>generar token</a> . <br />
            Si ocurre algun error debemos de modificar el archivo{" "}
            <a>./ns_npm_repository/oauth1/index.js</a>, buscamos{" "}
            <a>hostnameStep1</a> y cambiamos rest por system, deberia de
            quedar de la siguiente manera:
          </p>
          <div className="code">
            <div className="header-code">
              <BsFillTerminalFill />
            </div>
            <img src="../../img/token.png" alt="token" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ComandosBasicos() {
  return (
    <div className="category-content">
      <p className="tittle">Comandos Basicos de Gulp</p>
      <div className="secondary-content">
        <div className="description">
          <div className="code">
            <div className="header-code">
              <BsFillTerminalFill />
            </div>
            <div className="content-code">gulp theme:fetch</div>
            <div className="content-code">gulp extension:fetch</div>
            <div className="content-code">gulp theme:local</div>
            <div className="content-code">gulp extension:local</div>
            <div className="content-code">gulp theme:update-manifest</div>
            <div className="content-code">gulp extension:update-manifest</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
