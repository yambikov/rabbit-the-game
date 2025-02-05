// rules.js

import {useNavigate} from "react-router-dom"

function Rules() {
  const navigate = useNavigate()

  const handleOkayClick = () => {
    // Вернуть пользователя на домашнюю страницу
    navigate("/")
  }

  return (
    <div className="page">
      <h2 className="page__title">Правила</h2>
      <div className="page__scrollable-content">
        <p className="page__text">
          Это игра про блеф и ассоциации. Тайное слово знают все, кроме одного
          игрока — зайца. Найдите безбилетника, а если заяц ты — притворись
          таким же, как все — сиди тихо и не выдавай себя!
        </p>
        <p className="page__text">
          У всех, кроме одного, на карте загадано тайное слово. Все игроки по
          очереди называют ассоциации - такие, чтобы не выдать тайное слово.
          Зайцу нужно назвать слово, похожее на остальные. Иначе он себя выдаст.
        </p>
        <p className="page__text">
          Когда все назвали по слову, голосуйте! Покажите пальцем на того, кто,
          по вашему мнению, заяц. Если игрок за которого проголосовало
          большинство, оказался зайцем, он должен назвать тайное слово. В
          случае, если заяц угадал, он выигрывает. Если же у зайца не получилось
          отгадать, то вы победили!
        </p>
      </div>
      <button
        className="button button__small button__colour_yellow"
        onClick={handleOkayClick}
      >
        Ок
      </button>
    </div>
  )
}

export default Rules
