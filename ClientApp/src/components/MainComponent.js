import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

export function MainButton(text, handle) {
  return (
    <button className="button" onClick={handle}>
      {text}
    </button>
  );
}

export function MainButtonBack(text, handle) {
  return (
    <button className="button back" onClick={handle}>
      {text}
    </button>
  );
}

export function MainHeader(text) {
  return <h1 className="header">{text}</h1>;
}

export function MainImage(name) {
  const [savedPhoto, setSavedPhoto] = useState(null);

  useEffect(() => {
    getPhoto(name);
  }, []);

  async function getPhoto(name) {
    fetch("photo/" + name)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSavedPhoto(data);
      })
      .catch((error) => {
        console.error(error); // Обработка ошибок
      });
  }

  function handleFileSelect(event) {
    setPhoto(event.target.files[0], name);
  }
  function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
  async function setPhoto(file, name) {
    const base = await convertFileToBase64(file);

    const data = {
      name: name,
      base64: base,
    };

    sendPostRequest(data);
  }
  function sendPostRequest(data) {
    fetch("photo/save", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response)
      .then((data) => {
        // Обработка ответа от сервера
      })
      .catch((error) => {
        console.error(error); // Обработка ошибок
      });
  }

  return (
    <>
      {savedPhoto ? (
        <>
          <img className="photo" alt="photo" src={savedPhoto} />
        </>
      ) : (
        <div>
          <img className="photo" alt="photo" src={"./Icons.png"}></img>
          <label className="input-photo">
            {" "}
            Заменить фото
            <input type="file" hidden={true} onChange={handleFileSelect} />
          </label>
        </div>
      )}
    </>
  );
}

export function ThreeRandomCard() {
  


  return (
    <>
      <div className="stack">
        <img className="in-stack" alt="photo" src={"./Icons.png"}></img>
        <img className="in-stack" alt="photo" src={"./Icons.png"}></img>
        <img className="in-stack" alt="photo" src={"./Icons.png"}></img>
      </div>
    </>
  );
}

export function MainInput(text, id, quest) {
  return (
    <>
      {quest ? <label className="input-quest">{quest}</label> : null}

      <input className="input" id={id} placeholder={text}></input>
    </>
  );
}

export function Start(setNewGameI) {
  return (
    <>



      <Carousel/>


      {MainImage("first")}

      {MainButton("Новая игра", () => setNewGameI(true))}
      {MainButton("Загрузить", () => setNewGameI(false))}
      {MainButton("Об авторах", () => setNewGameI(false))}
      {MainButton("Помощь", () => setNewGameI(false))}
    </>
  );
}

export function NewGameI(setNewGameII) {
  return (
    <>
      <MainImage />
      <label className="text">
        NewGameI Однако, вот несколько возможных причин: Неправильное
        использование хука useState: Убедитесь, что вы правильно используете хук
        useState. Возможно, вы неправильно передаёте значение в функцию
        setNewGame. Проблема с областью видимости: Возможно, функция Start
        находится вне области видимости компонента, где используется хук
        useState, и поэтому не может получить доступ к состоянию. Ошибки в
        синтаксисе: Проверьте, нет ли ошибок в синтаксисе вашего кода. Например,
        возможно, вы забыли добавить скобки после вызова функции SetNewGame.
        Проблемы с функцией Start: Возможно, есть проблемы с самой функцией
        Start. Попробуйте вывести значение newGame перед вызовом функции Start и
        после неё, чтобы увидеть, изменяется ли состояние. Использование
        устаревшего состояния: Если функция Start вызывается до того, как
        компонент смонтировался, то она может использовать устаревшее значение
        состояния. В этом случае можно использовать useEffect для выполнения
        функции после монтирования компонента. Вот пример того, как можно
        исправить код:
      </label>
      {MainButton("В путь!", () => setNewGameII(true))}
      {MainButtonBack("Я передумал", () => setNewGameII(false))}
    </>
  );
}

export function NewGameII(setNewGameIII) {
  return (
    <>
      <MainImage />
      <label className="text">
        NewGameII димости компонента, где используется хук useState, и поэтому
        не может получить доступ к состоянию. Ошибки в синтаксисе: Проверьте,
        нет ли ошибок в синтаксисе вашего кода. Например, возможно, вы забыли
        добавить скобки после вызова функции SetNewGame. Проблемы с функцией
        Start: Возможно, есть проблемы с самой функцией Start. Попробуйте
        вывести значение newGame перед вызовом функции Start и после неё, чтобы
        увидеть, изменяется ли состояние. Использование устаревшего состояния:
        Если функция Start вызывается до того, как компонент смонтировался, то
        она может использовать устаревшее значение состояния. В этом случае
        можно использовать useEffect для выполнения функции после монтирования
        компонента. Вот пример того, как можно исправит
      </label>
      {MainButton("Продолжить", () => setNewGameIII(true))}
      {MainButtonBack("Назад", () => setNewGameIII(false))}
    </>
  );
}

export function NewGameIII(setNewGameVI, setNamePlayer) {
  function Next(namer) {
    var name = document.querySelector(`#${namer}`).value;
    console.log(name);
    setNamePlayer(name);
    setNewGameVI(true);
  }

  return (
    <>
      <MainImage />
      <label className="text no-scroll">
        NewGameIII Однако, вот несколько возможных причин: Неправильное
        использование хука useState: Убедитесь, что вы правильно используете хук
        useState.
      </label>

      {MainInput("Имя персонажа", "namer", "Придумайте имя персонажа:")}
      {MainButton("Продолжить", () => Next("namer"))}
      {MainButtonBack("Назад", () => setNewGameVI(false))}
    </>
  );
}

export function NewGameVI(setNewGameV, setTaskPlayer) {
  function Next(namer) {
    var name = document.querySelector(`#${namer}`).value;
    setTaskPlayer(name);
    setNewGameV(true);
  }

  return (
    <>
      <MainImage />
      <label className="text no-scroll">
        NewGameVI Однако, вот несколько возможных причин: Неправильное
        использование хука useState: Убедитесь, что вы правильно используете хук
        useState.
      </label>

      {MainInput("Причина", "task", "Напишите причину вашего путешествия?")}

      {MainButton("Продолжить", () => Next("task"))}
      {MainButtonBack("Назад", () => setNewGameV(false))}
    </>
  );
}

export function NewGameV(setNewGameV, setNamePlayer) {
  function Next(namer) {
    var name = document.querySelector(`#${namer}`).value;
    setNamePlayer(name);
    setNewGameV(true);
  }

  return (
    <>
      <label className="text no-scroll">
        Однако, вот несколько возможных причин: Неправильное использование хука
        useState: Убедитесь, что вы правильно используете хук useState.
      </label>


      {MainButton("Продолжить", () => Next("namer"))}
      {MainButtonBack("Назад", () => setNewGameV(false))}
    </>
  );
}

export function NewGameIV(setNewGameV, setNamePlayer) {
  function Next(namer) {
    var name = document.querySelector(`#${namer}`).value;
    setNamePlayer(name);
    setNewGameV(true);
  }

  return (
    <>
      <label className="text no-scroll">
        Однако, вот несколько возможных причин: Неправильное использование хука
        useState: Убедитесь, что вы правильно используете хук useState.
      </label>

      <></>

      {MainButton("Продолжить", () => Next("namer"))}
      {MainButtonBack("Назад", () => setNewGameV(false))}
    </>
  );
}
