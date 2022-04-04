import { useTransition, useState} from "react";

const Home = () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    // const [flag, setFlag] = useState(false);

    function handleClick() {
        startTransition(() => {
        setCount(c => c + 1);
        })
    }
    // setTimeout(() => {
    //     setCount(c => c + 1);
    //     setFlag(f => !f);
    //     // React will only re-render once at the end (that's batching!)
    //   }, 1000);

    return (
        <div>
            {isPending && <div>....ing</div>}
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}

export default Home;