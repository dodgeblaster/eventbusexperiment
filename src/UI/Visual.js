import { useVisualStore } from './'

export default function Visual() { 
    const nodes = useVisualStore((s) => s.nodes)
    const addNode = useVisualStore((s) => s.addNode)

    const getColor = id => id.toString().startsWith('fs-')
        ? 'bg-purple-500'
        : 'bg-blue-500'
    
    return (
        <div className="bg-gray-800 h-screen w-full flex pt-36 justify-center">
            <div className="w-96">
                <h1 className='text-white font-bold mb-2 opacity-05 text-3xl'>EventBus Experiment</h1>
                <button
                    className="px-4 py-2 rounded text-white bg-gray-700 text-sm w-full"
                    onClick={addNode}
                >
                    Add Node
                </button>

                {nodes.map((x) => (
                    <p
                        key={x.id}
                        className={`mt-2 w-full px-4 py-2 text-white ${getColor(x.id)}`}
                    >
                        {'Node ' + x.id}
                    </p>
                ))}
            </div>
        </div>
    )
}