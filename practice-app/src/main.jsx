import { createRoot } from 'react-dom/client'
import App from './firstProject/App.jsx'
import New from './secondProject/New.jsx'
import ThirdMain from './thirdProject/ThirdMain.jsx'
import MainFifth from './fifthProject/MainFifth.jsx'
import MainSixth from './sixthProjectRouting/MainSixth.jsx'
import { BrowserRouter } from 'react-router-dom'
import PracticeApp from './practiceProjects/PracticeApp.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <PracticeApp/>
    </BrowserRouter>
)

