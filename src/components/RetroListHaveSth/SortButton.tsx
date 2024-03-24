interface BookmarkButtonProps {
  onClick: () => void;
}

const SortButton: React.FC<BookmarkButtonProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>정렬</button>
    </>
  );
};

export default SortButton;
