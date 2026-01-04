type Props = {
  name: string;
  src?: string;
};

export default function Avatar({ name, src }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-14 h-14 rounded-full object-cover"
      />
    );
  }

  const letter = name.charAt(0).toUpperCase();

  return (
    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-semibold">
      {letter}
    </div>
  );
}
