import { LockItem } from "./components/LockItem"
import useLockList from "./hooks/useLockList"

export default function AllLock(){
    const list = useLockList()
    console.log(list,'list')
    return (
        <div>
            <LockItem/>
        </div>
    )
}