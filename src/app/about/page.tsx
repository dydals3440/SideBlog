import { Hero } from '@/components';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>000은 어떤 프로젝트인가요?</h2>
        <p className='mb-8'>
          여러 사람들과 정보를 공유하는 플랫폼 서비스입니다. <br /> 사람들과
          같이 지식을 나누고, 공유하는 문화를 만듬을 지향합니다.
        </p>
        <h2 className={TITLE_CLASS}>000 프로젝트 팀원을 소개합니다!</h2>
        <div className='mt-8 grid grid-cols-2 bg-sky-100 rounded-lg py-8'>
          <div>
            <h3 className={TITLE_CLASS}>Front-End</h3>
            <p>
              김용민 <br />
              차다인 <br />
              장 현 <br />
              이윤호 <br />
            </p>
          </div>
          <div>
            <h3 className={TITLE_CLASS}>Back-End</h3>
            <p>
              김준환 <br />
              박선균 <br />
            </p>
          </div>
          <div>
            <h3 className={TITLE_CLASS}>Product Manager</h3>
            <p>
              최유리 <br />
            </p>
          </div>
          <div>
            <h3 className={TITLE_CLASS}>Designer</h3>
            <p>
              김지원 <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
