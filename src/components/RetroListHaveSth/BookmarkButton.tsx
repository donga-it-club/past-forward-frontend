interface BookmarkButtonProps {
  onClick: () => void;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>북마크</button>
    </>
  );
};

export default BookmarkButton;
