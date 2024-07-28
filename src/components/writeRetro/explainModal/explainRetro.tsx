import { BiSolidLike } from 'react-icons/bi';
import { BsPersonFillCheck } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { IoPersonSharp } from 'react-icons/io5';
import { IoPeopleSharp } from 'react-icons/io5';
import { IoPersonCircleSharp } from 'react-icons/io5';

import { Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, Flex } from '@chakra-ui/react';
import * as S from '@/styles/writeRetroStyles/Explain.style';

interface ExplainButtonProps {
  templateId: number;
}

export const ExplainButton = ({ templateId }: ExplainButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let modalBody;

  if (templateId === 1) {
    modalBody = <ExplainKPT></ExplainKPT>;
  } else {
    modalBody = <ExplainKudos></ExplainKudos>;
  }

  return (
    <>
      <S.ExplainButtonStyle onClick={onOpen}>How to use?</S.ExplainButtonStyle>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent style={{ maxWidth: '934px', height: '523px', borderRadius: '10px' }} margin="auto 10px">
          {modalBody}
          {/* <ModalCloseButton /> */}
          <ModalCloseButton
            sx={{
              width: '52px',
              height: '52px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#ffffff',
              backgroundColor: '#111b47',
              borderRadius: '50%',
              display: 'flex',
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              alignItems: 'center',
              justifyContent: 'center',
              _hover: {
                backgroundColor: '#365f9d',
              },
            }}
          >
            <GrFormClose size={40} color="#ffffff" />
          </ModalCloseButton>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ExplainKPT = () => {
  return (
    <>
      <S.ExplainStyle>
        <Flex justifyContent="center">
          <Flex margin="0 auto" flexDirection={{ md: 'row', base: 'column' }}>
            <Flex margin="auto 10px">
              <IoPersonSharp color="#878787" size="26px" />
              <S.ExplainSideTitle>개인 단위 회고에 추천!</S.ExplainSideTitle>
            </Flex>
            <S.ExplainTitle>KPT 회고 더 잘 활용하기</S.ExplainTitle>
          </Flex>
        </Flex>
        <Flex flexDirection={{ md: 'row', base: 'column' }}>
          {/* ExplainKPT */}
          <S.ExplainBody>
            <S.ExplainSubTitle>진행 방법</S.ExplainSubTitle>
            <S.ExplainContent style={{ marginBottom: '60px' }}>
              <S.ExplainContentSpan>1.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                활동에 대해 <span style={{ fontWeight: '700' }}>Keep, Problem 섹션</span> 먼저 입력합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ marginBottom: '60px' }}>
              <S.ExplainContentSpan>2.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                <span style={{ fontWeight: '700' }}>Problem</span> 섹션에 작성된 부분을 개선해 볼 수 있는 아이디어를
                추상적으로 작성합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent>
              <S.ExplainContentSpan>3.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                <span style={{ fontWeight: '700' }}>Action Items</span>에{' '}
                <span style={{ fontWeight: '700' }}>Keep</span>
                에서 작성된 활동을 그대로 적거나, 어느 정도 수정하여 활동을 명시하고{' '}
                <span style={{ fontWeight: '700' }}>Try</span>에서 작성된 사항을 구체적인 행동 방안으로 작성하여 다음
                활동에서 활용합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>
          </S.ExplainBody>

          <S.ExplainLine></S.ExplainLine>

          <S.ExplainBody>
            <S.ExplainSubTitle>각 섹션 설명</S.ExplainSubTitle>
            <S.ExplainContent style={{ marginBottom: '28px' }}>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>Keep</span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                유지하고 싶은 좋은 습관이나 성과를 입력합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ marginBottom: '28px' }}>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
                  Problem
                </span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                프로젝트 중 발생한 문제점이나 개선이 필요한 부분을 입력합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ marginBottom: '28px' }}>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>Try</span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                Problem에서 도출한 문제를 해결하기 위한<br></br> 새로운 제안을 추상적으로 입력합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
                  Action Items
                </span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                <span style={{ fontWeight: '700' }}>Keep</span>에서 지속되어야 할 행동과<br></br>
                <span style={{ fontWeight: '700' }}>Problem</span>에서 도출된 문제를 해결하기 위한 구체적인 행동 계획을{' '}
                <span style={{ fontWeight: '700' }}>Try</span>를 참고하여 명확하게 작성합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>
          </S.ExplainBody>
        </Flex>
      </S.ExplainStyle>
    </>
  );
};

// export const ExplainKudos = () => {
//   return (
//     <>
//       <S.ExplainStyle>
//         <div style={{ display: 'flex' }}>
//           <div style={{ display: 'flex', marginTop: '15px', position: 'absolute', left: '120px' }}>
//             <IoPeopleSharp color="#878787" size="26px" />
//             <S.ExplainSideTitle>팀 단위 회고에 추천!</S.ExplainSideTitle>
//           </div>
//           <S.ExplainTitle>Kudos 회고 더 잘 활용하기</S.ExplainTitle>
//         </div>
//         <div style={{ display: 'flex' }}>
//           {/* ExplainKudos */}
//           <S.ExplainBody>
//             <S.ExplainSubTitle>진행 방법</S.ExplainSubTitle>
//             <S.ExplainContent style={{ marginBottom: '9px' }}>
//               <S.ExplainContentSpan>1.</S.ExplainContentSpan>
//               <S.ExplainContentSpan>
//                 팀원 모두가 <span style={{ fontWeight: '700' }}>Kudos, Went Well, To Improve 섹션</span> 먼저 정해진
//                 기한 내에 입력해 둡니다.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>

//             <S.ExplainContent style={{ width: '396px', marginLeft: '15px', marginBottom: '17px' }}>
//               <S.ExplainContentSpan>1-1.</S.ExplainContentSpan>
//               <S.ExplainContentSpan>
//                 <span style={{ fontWeight: '700' }}>Kudos 섹션</span>은
//                 <div style={{ display: 'inline-flex', margin: '0px 5px' }}>
//                   <BiSolidLike size={17} color="gray" />
//                   <S.ExplainTextImg>
//                     <IoPersonCircleSharp size={15} color="#ADB8CC" />
//                     <span
//                       style={{
//                         fontSize: '8px',
//                         fontWeight: '500',
//                         color: '#ADB8CC',
//                         lineHeight: '16px',
//                         marginLeft: '3px',
//                       }}
//                     >
//                       닉네임
//                     </span>
//                   </S.ExplainTextImg>
//                 </div>
//                 해당 버튼에 칭찬하고자<br></br>
//                 하는 팀원을 지정하면 됩니다.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>

//             <S.ExplainContent style={{ marginBottom: '17px' }}>
//               <S.ExplainContentSpan>2.</S.ExplainContentSpan>
//               <S.ExplainContentSpan>
//                 같은 시간에 모여 작성된 <span style={{ fontWeight: '700' }}>3개의 섹션</span>을 함께 읽어보고, <br></br>{' '}
//                 다음 활동 떄 진행해야 하는 활동을 정합니다.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>

//             <S.ExplainContent style={{ marginBottom: '17px' }}>
//               <S.ExplainContentSpan>3.</S.ExplainContentSpan>
//               <S.ExplainContentSpan>
//                 지정한 활동을 <span style={{ fontWeight: '700' }}>Action Items 섹션</span>에 입력합니다.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>

//             <S.ExplainContent>
//               <S.ExplainContentSpan>4.</S.ExplainContentSpan>
//               <S.ExplainContentSpan>
//                 <span style={{ fontWeight: '700' }}>Action Items</span>에 작성된 활동을 담당할 담당자를 정하여<br></br>
//                 <div style={{ display: 'inline-flex', margin: '0 5px' }}>
//                   <BsPersonFillCheck size={17} color="gray" />
//                   <S.ExplainTextImg>
//                     <IoPersonCircleSharp size={15} color="#ADB8CC" />
//                     <span
//                       style={{
//                         fontSize: '8px',
//                         fontWeight: '500',
//                         color: '#ADB8CC',
//                         lineHeight: '16px',
//                         marginLeft: '3px',
//                       }}
//                     >
//                       닉네임
//                     </span>
//                   </S.ExplainTextImg>
//                 </div>
//                 해당 버튼에 팀원을 지정합니다.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>
//           </S.ExplainBody>

//           <S.ExplainLine></S.ExplainLine>

//           <S.ExplainBody>
//             <S.ExplainSubTitle>각 섹션 설명</S.ExplainSubTitle>
//             <S.ExplainContent style={{ marginBottom: '40px' }}>
//               <S.ExplainImgStyle>
//                 <S.ExplainImgLine></S.ExplainImgLine>
//                 <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>Kudos</span>
//               </S.ExplainImgStyle>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
//                 팀원이 활동 기간 동안 잘한 점을 칭찬해주세요.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>

//             <S.ExplainContent style={{ marginBottom: '40px' }}>
//               <S.ExplainImgStyle>
//                 <S.ExplainImgLine></S.ExplainImgLine>
//                 <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
//                   Went Well
//                 </span>
//               </S.ExplainImgStyle>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
//                 프로젝트나 스프린트 동안 잘 진행된 사항을 공유하세요.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>

//             <S.ExplainContent style={{ marginBottom: '40px' }}>
//               <S.ExplainImgStyle>
//                 <S.ExplainImgLine></S.ExplainImgLine>
//                 <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
//                   To Improve
//                 </span>
//               </S.ExplainImgStyle>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
//                 개선이 필요한 부분을 솔직하게 공유하세요.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>

//             <S.ExplainContent>
//               <S.ExplainImgStyle>
//                 <S.ExplainImgLine></S.ExplainImgLine>
//                 <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
//                   Action Items
//                 </span>
//               </S.ExplainImgStyle>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
//               <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
//                 <span style={{ fontWeight: '700' }}>Went Well</span>에서 지속되어야 할 행동과<br></br>
//                 <span style={{ fontWeight: '700' }}>To Improve</span>에서 도출된 문제를 해결하기 위한 구체적인 행동
//                 계획을 수립하세요.
//               </S.ExplainContentSpan>
//             </S.ExplainContent>
//           </S.ExplainBody>
//         </div>
//       </S.ExplainStyle>
//     </>
//   );
// };

export const ExplainKudos = () => {
  return (
    <>
      <S.ExplainStyle>
        <Flex justifyContent="center">
          <Flex margin="0 auto" flexDirection={{ md: 'row', base: 'column' }}>
            <Flex margin="auto 10px">
              <IoPeopleSharp color="#878787" size="26px" />
              <S.ExplainSideTitle>팀 단위 회고에 추천!</S.ExplainSideTitle>
            </Flex>
            <S.ExplainTitle>Kudos 회고 더 잘 활용하기</S.ExplainTitle>
          </Flex>
        </Flex>
        <Flex flexDirection={{ md: 'row', base: 'column' }}>
          {/* ExplainKudos */}
          <S.ExplainBody>
            <S.ExplainSubTitle>진행 방법</S.ExplainSubTitle>
            <S.ExplainContent style={{ marginBottom: '9px' }}>
              <S.ExplainContentSpan>1.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                팀원 모두가 <span style={{ fontWeight: '700' }}>Kudos, Went Well, To Improve 섹션</span> 먼저 정해진
                기한 내에 입력해 둡니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ width: '396px', marginLeft: '15px', marginBottom: '17px' }}>
              <S.ExplainContentSpan>1-1.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                <span style={{ fontWeight: '700' }}>Kudos 섹션</span>은
                <div style={{ display: 'inline-flex', margin: '0px 5px' }}>
                  <BiSolidLike size={17} color="gray" />
                  <S.ExplainTextImg>
                    <IoPersonCircleSharp size={15} color="#ADB8CC" />
                    <span
                      style={{
                        fontSize: '8px',
                        fontWeight: '500',
                        color: '#ADB8CC',
                        lineHeight: '16px',
                        marginLeft: '3px',
                      }}
                    >
                      닉네임
                    </span>
                  </S.ExplainTextImg>
                </div>
                해당 버튼에 칭찬하고자<br></br>
                하는 팀원을 지정하면 됩니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ marginBottom: '17px' }}>
              <S.ExplainContentSpan>2.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                같은 시간에 모여 작성된 <span style={{ fontWeight: '700' }}>3개의 섹션</span>을 함께 읽어보고, <br></br>{' '}
                다음 활동 떄 진행해야 하는 활동을 정합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ marginBottom: '17px' }}>
              <S.ExplainContentSpan>3.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                지정한 활동을 <span style={{ fontWeight: '700' }}>Action Items 섹션</span>에 입력합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent>
              <S.ExplainContentSpan>4.</S.ExplainContentSpan>
              <S.ExplainContentSpan>
                <span style={{ fontWeight: '700' }}>Action Items</span>에 작성된 활동을 담당할 담당자를 정하여<br></br>
                <div style={{ display: 'inline-flex', margin: '0 5px' }}>
                  <BsPersonFillCheck size={17} color="gray" />
                  <S.ExplainTextImg>
                    <IoPersonCircleSharp size={15} color="#ADB8CC" />
                    <span
                      style={{
                        fontSize: '8px',
                        fontWeight: '500',
                        color: '#ADB8CC',
                        lineHeight: '16px',
                        marginLeft: '3px',
                      }}
                    >
                      닉네임
                    </span>
                  </S.ExplainTextImg>
                </div>
                해당 버튼에 팀원을 지정합니다.
              </S.ExplainContentSpan>
            </S.ExplainContent>
          </S.ExplainBody>

          <S.ExplainLine></S.ExplainLine>

          <S.ExplainBody>
            <S.ExplainSubTitle>각 섹션 설명</S.ExplainSubTitle>
            <S.ExplainContent style={{ marginBottom: '40px' }}>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>Kudos</span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                팀원이 활동 기간 동안 잘한 점을 칭찬해주세요.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ marginBottom: '40px' }}>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
                  Went Well
                </span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                프로젝트나 스프린트 동안 잘 진행된 사항을 공유하세요.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent style={{ marginBottom: '40px' }}>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
                  To Improve
                </span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                개선이 필요한 부분을 솔직하게 공유하세요.
              </S.ExplainContentSpan>
            </S.ExplainContent>

            <S.ExplainContent>
              <S.ExplainImgStyle>
                <S.ExplainImgLine></S.ExplainImgLine>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', lineHeight: '28px' }}>
                  Action Items
                </span>
              </S.ExplainImgStyle>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>: </S.ExplainContentSpan>
              <S.ExplainContentSpan style={{ fontSize: '15px', lineHeight: '26px' }}>
                <span style={{ fontWeight: '700' }}>Went Well</span>에서 지속되어야 할 행동과<br></br>
                <span style={{ fontWeight: '700' }}>To Improve</span>에서 도출된 문제를 해결하기 위한 구체적인 행동
                계획을 수립하세요.
              </S.ExplainContentSpan>
            </S.ExplainContent>
          </S.ExplainBody>
        </Flex>
      </S.ExplainStyle>
    </>
  );
};
