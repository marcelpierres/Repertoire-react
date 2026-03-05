export default function Message({ message }) {
  return (
    <div className="relative px-5 py-[10px] text-xs text-black/60 bg-black/[0.05] text-left leading-[1.7] even:bg-black/[0.025]">
      <span className="font-semibold text-black mr-[10px]">
        {message.userName}:
      </span>
      {message.message}
    </div>
  )
}
