import { useState } from "react"

export default function TwitterFollowCard({ userName, name }) {
    const [isFollowing, setIsFollowing] = useState(()=> {
        const followStorage = window.localStorage.getItem(`follow-${userName}`)
        if (followStorage) return JSON.parse(followStorage)
        return false
    })
    const text = isFollowing
        ? 'Siguiendo'
        : 'Seguir'

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(prevfollow => !prevfollow)
        window.localStorage.setItem(`follow-${userName}`, JSON.stringify(!isFollowing) )
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt={`El avatar de ${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}