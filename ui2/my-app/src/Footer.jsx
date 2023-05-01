function Footer() {
  return (
    <div className="card-footer">
      <footer>
        <div className="headerLeft">
          <h3>QPICK</h3>
        </div>
        <ul className="headerRight-foot">
          <li>Избранное</li>
          <li>Корзина</li>
          <li>Контакты</li>
        </ul>
        <ul className="headerRight-foot">
          <li>Условия сервиса</li>
          <li>Рус</li>
        </ul>
        <ul className="headerRight">
          <li className="m-17">
            <img width={30} height={20} src="/img/VK.png" alt="" />
          </li>
          <li className="m-17">
            <img width={30} height={30} src="/img/Telegram.png" alt="" />
          </li>
          <li className="m-17">
            <img width={30} height={30} src="/img/Whatsapp.png" alt="" />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export { Footer };
