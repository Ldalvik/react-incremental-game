const SplashScreen = () => {
    return (
            <div className="grid-container">
                    <div className="grid-x grid-padding-x grid-padding-y align-center">
                        <div className="cell small-6">
                            <h1 className="text-center">Welcome.</h1>
                            <p className="text-center">
                                A dream that everyone dreams: a never ending fishing trip. Gone Fishing is an incremental fishing game that serves absolutely no purpose other than to pass the time.
                            </p>
                            <a class="button expanded menu-btn" href="/new">New Game</a>
                            <a class="button expanded menu-btn" href="/load">Load Game</a>
                            <a class="button expanded menu-btn" href="/tutorial">How To Play</a>
                        </div>
                    </div>
            </div>
    )
}

export default SplashScreen