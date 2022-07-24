export default function Item({children: value = 'Value', label = 'Name'}) {
  return(
    <span className="text-sm">
     <strong>{label}</strong>&nbsp;{value}
      
    </span>
  );
}