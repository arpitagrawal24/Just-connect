const Connect = (
    {
        peerId,
        remotePeerIdValue,
        setRemotePeerIdValue,
        handleSubmit
    }
) => {
    return (
        <div className='max-w-md m-auto p-6 bg-white rounded-md shadow-md'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Just Connect</h1>
            <div className='mb-4'>
                <label className='block mb-1 font-bold'>Your User ID:</label>
                <h1
                    className='w-full p-2 rounded block mb-1 font-bold'
                >
                    {peerId}
                </h1>
            </div>
            <div className='mb-4'>
                <label className='block mb-1 font-bold'>Receiver User ID:</label>
                <input
                    type="text"
                    placeholder="Enter Receiver's User ID"
                    value={remotePeerIdValue}
                    onChange={(e) => setRemotePeerIdValue(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded'
                />
            </div>
            <button
                onClick={handleSubmit}
                className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700'
            >
                Connect
            </button>
        </div>
    )
}

export default Connect