import './index.css'

const TabItem = props => {
  const {tabDetails, updatedId, isActive} = props
  const {displayText, tabId} = tabDetails
  const updateState = () => {
    updatedId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={updateState}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
