const Call = (
    {
        remoteVideoRef,
        currentUserVideoRef,
        remotePeerIdValue,
        makeCall,
        hangUp,
        toggleVideo,
        toggleAudio,
    }
) => {
    return (
        <div className="h-5/6 lg:w-3/4 m-auto p-5 flex flex-col justify-between rounded-2xl bg-white">
            <div className="flex justify-around h-full mb-2">
                <div className="relative w-full h-full">
                    <video
                        className="absolute w-full h-full mb-2 rounded-2xl bg-red-700"
                        ref={remoteVideoRef}
                    />
                    <video
                        className="absolute bottom-4 right-4 w-1/4 h-1/4 border-2 rounded-xl object-cover bg-gray-100"
                        ref={currentUserVideoRef}
                    />
                </div>
            </div>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => makeCall(remotePeerIdValue)}
                    className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                >
                    Call
                </button>
                <button
                    onClick={hangUp}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Hang Up
                </button>
                <button
                    onClick={toggleVideo}
                    className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
                >
                    Toggle Video
                </button>
                <button
                    onClick={toggleAudio}
                    className="bg-yellow-500 text-white px-4 py-2 ml-2 rounded"
                >
                    Toggle Audio
                </button>
            </div>
        </div>
    )
}

export default Call