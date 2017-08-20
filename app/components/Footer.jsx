import React from 'react'


var Footer = (props) => {
  return (
    <div className='footer'>
      <div className='grid-x'>
        <div className='medium-6 large-6 small-6 cell left-grid'>
            <h3>ВОЗНИКЛИ ВОПРОСЫ?</h3>
            <p>ВОСПОЛЬЗУЙТЕСЬ ФОРМОЙ ОТПРАВКИ ЗАЯВКИ И МЫ СВЯЖЕМСЯ С ВАМИ</p>
            <a className='button'>ОСТАВИТЬ ЗАЯВКУ</a>
        </div>
        <div className='medium-6 large-6 small-6 cell right-grid'>
          <h3>ИЛИ СВЯЖИТЕСЬ С НАМИ НАПРЯМУЮ:</h3>
          <p className='adress'>Г.МОСКВА УЛ.ВИКТОРЕНКО Д.11</p>
          <p>+7(999) 675-32-44</p>
          <a className='mail'>ORDER@TRENDSOFT.RU</a>
        </div>
      </div>
      <div className='top-bar not-fff'>
               <div className='top-bar-left'>
                   <ul className='menu'>
                      <li><a className='copyright'>ООО "Трендсофт", 2011-2015</a></li>
                      <li><a className='phone'>+7(999) 675-32-44</a></li>
                   </ul>
               </div>

               <div className='top-bar-right'>

                     <ul className='menu socials'>
                        <li><a><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a><i className="fa fa-vk" aria-hidden="true"></i></a></li>
                     </ul>

              </div>
      </div>
    </div>
  )
}

export default Footer
