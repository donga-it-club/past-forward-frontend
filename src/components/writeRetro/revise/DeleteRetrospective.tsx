import { useNavigate } from 'react-router-dom';
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverFooter, Portal } from '@chakra-ui/react';
import { MockRetrospective } from '@/api/__mock__/retrospective';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { useCustomToast } from '@/hooks/useCustomToast';

const DeleteRetrospective = () => {
  const toast = useCustomToast();
  const navigate = useNavigate();
  const handleDeleteRetrospective = async () => {
    try {
      await RetrospectiveService.delete({ retrospectiveId: MockRetrospective.data.id });
      navigate('/retrolist');
      toast.info('회고가 삭제되었습니다.');
    } catch (e) {
      toast.error(e);
    }
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="red" variant="outline">
            회고 삭제
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverBody margin="0 auto">회고를 정말 삭제하시겠습니까?</PopoverBody>
            <PopoverFooter display="flex" flexDirection="row-reverse" margin="0 auto">
              <Button colorScheme="red" onClick={handleDeleteRetrospective}>
                네
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default DeleteRetrospective;
