import { useTheme } from '../hook/useTheme'
import modeIcon from '../assets/mode-icon.svg'

import './ThemeSelector.css'

const themeColors = ['#58249c' , '#249c6b' , '#b70233']

export default function ThemeSelector() {
const {changeColor , changeMode , mode} = useTheme()

const toggleMode = () => {
  changeMode(mode === 'dark' ? 'light' : 'dark')
}
  return (
    <div className='theme-selector'>
      <div className="mode-toggle">
        <img 
          src= {modeIcon} 
          onClick={toggleMode}
          alt ="dark/light icon" 
          style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} // when we are on dark mode the color of icon will be white
        />
      </div>
        <div className="theme-buttons">
            {themeColors.map(color => (
                <div 
                    key = {color}
                    onClick={() => changeColor(color)}
                    style = {{background : color}}
                />
            ))}
        </div>

    </div>
  )
}
