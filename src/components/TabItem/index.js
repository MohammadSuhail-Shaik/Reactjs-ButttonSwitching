import './index.css'

const TabItem = props => {
  const {tabDetails, onClickChange, activeButton} = props
  const {tabId, displayText} = tabDetails

  const getActiveTabId = () => {
    onClickChange(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeButton === tabId ? 'active-tab-btn' : ''}`}
        onClick={getActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
