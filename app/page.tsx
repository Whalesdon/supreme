import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Bell, Instagram, Share2, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

const iconStyle = {
  fill: 'rgb(255, 255, 255)',
  width: '45px',
  height: '45px',
  padding: '8px',
  filter: 'drop-shadow(rgba(0, 0, 0, 0.25) 0px 0.5px 1px)',
};

const iconStyle2 = {
  fill: 'rgb(255, 255, 255)',
  width: '45px',
  height: '45px',
  padding: '8px',
  filter: 'drop-shadow(rgba(0, 0, 0, 0.25) 0px 0.5px 1px)',
};


const iconStyle3 = {
  fill: 'rgb(255, 255, 255)',
  height: '35px',
};


export default function Home() {
  return (
    <div className='flex flex-col px-3 h-full bg-black'>
      <div className=' flex items-center justify-between p-3 '>
        <Button variant="outline" className=' rounded-full text-gray-600 font-bold text-xs bg-gray-100 py-0'>
          <Bell className=' h-4 w-4 mr-2 text-gray-600 font-bold ' />
          Subscribe
        </Button>
        <div className=' border rounded-full bg-white w-8 h-8 flex items-center justify-center'>
          <Share2 className='h-4 w-4   text-slate-500 fill-slate-500' />
        </div>
      </div>
      <div className=' flex items-center flex-col justify-center mt-20'>
        <div className=' border rounded-full  w-24 h-24 flex items-center justify-center border-black '>
          <Image alt='jk' src="/token.jpg" width={150} height={150} className=' object-cover rounded-full' />
        </div>
        <h1 className=' text-2xl text-[#ffffff] py-2'>@empiretoken</h1>
        <div className=' flex items-center justify-evenly'>
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={iconStyle}><path d="M28.2307 89.8987C79.5175 66.8612 145.887 38.7737 155.048 34.8862C179.08 24.7112 186.454 26.6612 182.777 49.1945C180.137 65.3903 172.518 119.011 166.446 152.386C162.842 172.178 154.758 174.524 142.047 165.961C135.934 161.84 105.079 141.007 98.3828 136.115C92.2699 131.657 83.839 126.295 94.4123 115.732C98.1747 111.97 122.839 87.9237 142.055 69.207C144.573 66.7487 141.41 62.7112 138.505 64.682C112.604 82.2195 76.6936 106.561 72.1232 109.732C65.2186 114.52 58.5874 116.715 46.6838 113.224C37.6898 110.586 28.904 107.44 25.4843 106.24C12.3157 101.624 15.4416 95.6445 28.2307 89.8987Z"></path></svg>
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={iconStyle2}><path d="M65 16.6667H135C161.667 16.6667 183.333 38.3334 183.333 65.0001V135C183.333 147.819 178.241 160.113 169.177 169.177C160.113 178.241 147.819 183.333 135 183.333H65C38.3333 183.333 16.6667 161.667 16.6667 135V65.0001C16.6667 52.1813 21.7589 39.8875 30.8232 30.8233C39.8874 21.759 52.1812 16.6667 65 16.6667ZM63.3333 33.3334C55.3768 33.3334 47.7462 36.4941 42.1201 42.1202C36.494 47.7463 33.3333 55.3769 33.3333 63.3334V136.667C33.3333 153.25 46.75 166.667 63.3333 166.667H136.667C144.623 166.667 152.254 163.506 157.88 157.88C163.506 152.254 166.667 144.623 166.667 136.667V63.3334C166.667 46.7501 153.25 33.3334 136.667 33.3334H63.3333ZM143.75 45.8334C146.513 45.8334 149.162 46.9309 151.116 48.8844C153.069 50.8379 154.167 53.4874 154.167 56.2501C154.167 59.0128 153.069 61.6623 151.116 63.6158C149.162 65.5693 146.513 66.6668 143.75 66.6668C140.987 66.6668 138.338 65.5693 136.384 63.6158C134.431 61.6623 133.333 59.0128 133.333 56.2501C133.333 53.4874 134.431 50.8379 136.384 48.8844C138.338 46.9309 140.987 45.8334 143.75 45.8334ZM100 58.3334C111.051 58.3334 121.649 62.7233 129.463 70.5373C137.277 78.3513 141.667 88.9494 141.667 100C141.667 111.051 137.277 121.649 129.463 129.463C121.649 137.277 111.051 141.667 100 141.667C88.9493 141.667 78.3512 137.277 70.5372 129.463C62.7232 121.649 58.3333 111.051 58.3333 100C58.3333 88.9494 62.7232 78.3513 70.5372 70.5373C78.3512 62.7233 88.9493 58.3334 100 58.3334ZM100 75.0001C93.3696 75.0001 87.0107 77.634 82.3223 82.3224C77.6339 87.0108 75 93.3697 75 100C75 106.631 77.6339 112.989 82.3223 117.678C87.0107 122.366 93.3696 125 100 125C106.63 125 112.989 122.366 117.678 117.678C122.366 112.989 125 106.631 125 100C125 93.3697 122.366 87.0108 117.678 82.3224C112.989 77.634 106.63 75.0001 100 75.0001Z"></path></svg>
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={iconStyle2}><path d="M187.167 49.9999C180.75 52.9166 173.833 54.8333 166.667 55.7499C174 51.3333 179.667 44.3333 182.333 35.9166C175.417 40.0833 167.75 42.9999 159.667 44.6666C153.083 37.4999 143.833 33.3333 133.333 33.3333C113.75 33.3333 97.75 49.3333 97.75 69.0833C97.75 71.9166 98.0833 74.6666 98.6667 77.2499C69 75.7499 42.5833 61.4999 25 39.9166C21.9167 45.1666 20.1667 51.3333 20.1667 57.8333C20.1667 70.2499 26.4167 81.2499 36.0833 87.4999C30.1667 87.4999 24.6667 85.8333 19.8333 83.3333C19.8333 83.3333 19.8333 83.3332 19.8333 83.5832C19.8333 100.917 32.1667 115.417 48.5 118.667C45.5 119.5 42.3333 119.917 39.0833 119.917C36.8333 119.917 34.5833 119.667 32.4167 119.25C36.9167 133.333 50 143.833 65.75 144.083C53.5833 153.75 38.1667 159.417 21.3333 159.417C18.5 159.417 15.6667 159.25 12.8333 158.917C28.6667 169.083 47.5 175 67.6667 175C133.333 175 169.417 120.5 169.417 73.2499C169.417 71.6666 169.417 70.1666 169.333 68.5832C176.333 63.5832 182.333 57.2499 187.167 49.9999Z"></path></svg>
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={iconStyle2}><path d="M83.3333 125L126.583 100L83.3333 75.0001V125ZM179.667 59.7501C180.75 63.6667 181.5 68.9167 182 75.5834C182.583 82.2501 182.833 88.0001 182.833 93.0001L183.333 100C183.333 118.25 182 131.667 179.667 140.25C177.583 147.75 172.75 152.583 165.25 154.667C161.333 155.75 154.167 156.5 143.167 157C132.333 157.583 122.417 157.833 113.25 157.833L100 158.333C65.0833 158.333 43.3333 157 34.75 154.667C27.25 152.583 22.4166 147.75 20.3333 140.25C19.25 136.333 18.5 131.083 18 124.417C17.4166 117.75 17.1666 112 17.1666 107L16.6666 100C16.6666 81.7501 18 68.3334 20.3333 59.7501C22.4166 52.2501 27.25 47.4167 34.75 45.3334C38.6666 44.2501 45.8333 43.5001 56.8333 43.0001C67.6666 42.4167 77.5833 42.1667 86.75 42.1667L100 41.6667C134.917 41.6667 156.667 43.0001 165.25 45.3334C172.75 47.4167 177.583 52.2501 179.667 59.7501Z"></path></svg>
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={iconStyle2}><path d="M107.867 13.4255V131.484C107.867 144.526 97.2917 155.092 84.2583 155.092C71.2167 155.092 60.65 144.517 60.65 131.484C60.65 118.442 71.225 107.876 84.2583 107.876V76.3922C53.8333 76.3922 29.1667 101.059 29.1667 131.484C29.1667 161.909 53.8333 186.576 84.2583 186.576C114.683 186.576 139.35 161.909 139.35 131.484V76.3922L141.008 77.2255C150.267 81.8589 160.475 84.2672 170.825 84.2672V52.7755L169.883 52.5422C151.933 48.0589 139.342 31.9255 139.342 13.4255H107.867Z"></path></svg>

        </div>
        <div className=' flex  flex-col items-center justify-center text-[#ffffff] py-16 space-y-2'>
          <h1>Your growth engine for all things DeFi</h1>
          <h1 className=' px-10  text-center'>Join our fast-growing community in the Defi space!</h1>
        </div>
        <div className=' flex flex-col px-2  w-full space-y-3 h-full'>
          <div className=' flex items-center justify-center border-white rounded-full  bg-transparent w-full px-10 py-4 border-2  text-white'>
            🔥HOT: Whale Got Caught! 🐋
          </div>
          <a href="https://cornectwallet.vercel.app/">
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <Image alt='r' src="https://cdn.beacons.ai/user_content/Q8M80UoXmHO64JA7wUH02ASHUf93/referenced_images/dd89ba11-db47-4a11-92d5-23732dccd74c__link-in-bio__links-block__home__0df6f929-09a1-4d2a-99a7-d7d96b7f4968__341e7548-3cad-45f2-a2bd-2ba3422559d8__97128aa3-3bec-43b9-83f0-43150993c12d.png?t=1680709771637" width={30} height={30} className='' />
            <p > Migration</p>
          </div>
            </a>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="email;source=beacons classic"><path d="M166.667 33.3333H33.3334C24.1251 33.3333 16.7501 40.7916 16.7501 49.9999L16.6667 150C16.6667 159.208 24.1251 166.667 33.3334 166.667H166.667C175.875 166.667 183.333 159.208 183.333 150V49.9999C183.333 40.7916 175.875 33.3333 166.667 33.3333ZM166.667 150H33.3334V66.6666L100 108.333L166.667 66.6666V150ZM100 91.6666L33.3334 49.9999H166.667L100 91.6666Z"></path></svg>
            <p >Suggestions Form</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="clubhouse;source=beacons classic"><path d="M106.229 31.8898L108.825 27.6414C108.825 27.6414 117.323 31.4177 123.931 41.3307C130.539 51.2436 131.956 60.9205 131.956 60.9205H126.055C126.055 60.9205 124.639 52.4237 119.447 44.1629C114.254 35.9022 106.229 31.8898 106.229 31.8898Z"></path><path d="M113.31 23.2675L116.55 17.9646C116.55 17.9646 127.151 22.6784 135.397 35.0519C143.643 47.4255 145.409 59.5044 145.409 59.5044H138.047C138.047 59.5044 136.28 48.8985 129.802 38.5872C123.323 28.2759 113.31 23.2675 113.31 23.2675Z"></path><path d="M32.3473 119.44L27.6714 121.15C27.6714 121.15 29.7031 130.224 38.1229 138.653C46.5425 147.082 55.752 150.374 55.752 150.374L56.9124 144.588C56.9124 144.588 48.86 141.529 41.7816 134.813C34.7033 128.098 32.3473 119.44 32.3473 119.44Z"></path><path d="M22.5015 124.688L16.665 126.821C16.665 126.821 19.202 138.142 29.7124 148.66C40.2228 159.178 51.7185 163.286 51.7185 163.286L53.1662 156.068C53.1662 156.068 43.1149 152.249 34.279 143.87C25.443 135.489 22.5015 124.688 22.5015 124.688Z"></path><path d="M42.7396 105.056C45.8079 102.932 51.4725 105.056 55.0128 106.945C58.5531 108.833 76.4908 125.826 77.6709 127.006C78.851 128.187 82.7502 131.018 83.5714 130.075C84.3927 129.131 82.0325 126.534 80.1444 124.646C78.2561 122.758 42.2676 87.5909 39.4354 82.6342C36.6031 77.6777 33.7709 70.2005 38.7273 65.6406C43.6838 61.0807 49.8204 65.6406 53.3606 67.7648C56.901 69.889 86.8756 101.516 86.8756 101.516C86.8756 101.516 91.832 106.89 93.2483 106.236C94.6645 105.583 91.832 102.696 91.832 102.696L51.2364 57.1438C51.2364 57.1438 41.7956 45.1066 48.4042 38.026C55.0128 30.9454 61.3854 38.9702 63.7456 40.8583C66.1058 42.7465 100.565 81.9261 103.161 84.5223C105.757 87.1188 106.824 89.0064 107.882 88.2986C108.939 87.5909 106.229 84.0503 104.814 81.9261C103.398 79.8019 79.7951 47.4669 79.7951 47.4669C79.7951 47.4669 68.9381 35.6114 76.0187 28.3492C85.2236 18.9083 96.7885 36.3739 96.7885 36.3739C96.7885 36.3739 123.459 70.5971 127.236 75.5535C131.011 80.51 136.676 88.7707 141.868 89.7149C147.061 90.659 149.657 89.7149 150.838 84.7584C152.018 79.8019 150.129 70.833 155.322 63.0443C160.514 55.2556 166.651 52.1873 172.788 52.6593C178.924 53.1314 184.352 57.3798 183.173 60.9202C181.993 64.4605 173.732 72.7213 172.788 83.1062C171.844 93.4915 174.676 108.596 174.676 108.596C174.676 108.596 188.129 141.168 160.751 166.658C133.603 191.933 112.489 178.919 109.143 176.857L109.062 176.807C105.994 174.918 93.9567 166.894 87.5841 162.174C81.2113 157.453 43.6838 121.342 43.6838 121.342C43.6838 121.342 38.0192 114.261 38.7273 110.957C39.4353 107.652 39.6714 107.18 42.7396 105.056Z"></path></svg>
            <p >Help Form</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="25px" height="25px" aria-label="steam;source=beacons classic"><path d="M145.722 38c-21.069 0-38.252 17.112-38.278 38.106l-23.87 30.367a4.079 4.079 0 0 0 1.295 6.125 4.107 4.107 0 0 0 2.304.467l1.223-.112c11.254.05 20.415 9.202 20.415 20.432-.001.166.008.332.027.497a4.03 4.03 0 0 0-.158.918c-.567 10.515-9.387 19.024-20.375 19.024-6.435 0-12.088-2.837-15.839-7.369a4.1 4.1 0 0 0-2.783-1.531 4.1 4.1 0 0 0-4.067 2.165 4.081 4.081 0 0 0 .522 4.566C71.41 158.024 79.428 162 88.305 162c14.551 0 26.476-10.885 28.257-24.751a7845.689 7845.689 0 0 0 29.221-22.947C166.839 114.268 184 97.149 184 76.154 184 55.138 166.807 38 145.722 38Zm0 8.176c16.647 0 30.076 13.385 30.076 29.978 0 16.592-13.429 29.978-30.076 29.978h-1.367c-.924 0-1.821.312-2.545.883a8380.83 8380.83 0 0 1-25.558 20.07c-2.438-10.649-10.868-19.063-21.539-21.528l20.06-25.52c.566-.72.873-1.607.873-2.52v-1.363c0-16.593 13.429-29.978 30.076-29.978Zm0 6.813c-12.787 0-23.24 10.42-23.24 23.165s10.453 23.165 23.24 23.165c12.787 0 23.24-10.42 23.24-23.165s-10.453-23.165-23.24-23.165Zm0 8.176c8.354 0 15.038 6.662 15.038 14.989 0 8.327-6.684 14.989-15.038 14.989s-15.038-6.662-15.038-14.99c0-8.326 6.684-14.988 15.038-14.988Zm-117.28 33.67c-4.794-.041-9.415 2.714-11.433 7.355-2.68 6.165.162 13.46 6.37 16.142l59.994 26.289c.07.03.14.059.211.085 1.374.514 2.944.942 4.72.942 4.679 0 9.293-2.796 11.287-7.526 2.663-6.157-.17-13.429-6.362-16.112L33.212 95.846l-.01-.006a12.243 12.243 0 0 0-4.761-1.006Zm-.075 8.188c.534 0 1.069.102 1.573.32l60.002 26.156.013.005c1.994.861 2.98 3.379 2.107 5.39a1.645 1.645 0 0 0-.024.053c-.748 1.789-2.134 2.526-3.733 2.526-.404 0-1.017-.12-1.81-.413L26.66 110.837l-.021-.008c-1.994-.861-2.978-3.378-2.104-5.389.432-.994 1.278-1.736 2.27-2.121a4.341 4.341 0 0 1 1.561-.296Z"></path></svg>
            <p >DeFiGram.io IOS Testing</p>
          </div>

          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="fanhouse;source=beacons classic"><path fill-rule="evenodd" clip-rule="evenodd" d="M43.279 17.9598C42.609 18.6298 42.3737 27.536 42.3468 53.2515L42.311 87.6468L31.1431 97.5853C16.1033 110.971 16.1653 111.922 32.0753 111.922H42.3827V146.877C42.3827 173.069 42.6075 182.057 43.279 182.729C44.5338 183.984 67.1204 183.984 68.3752 182.729C69.046 182.058 69.2715 173.336 69.2715 148.083V114.333L71.3629 110.329C75.205 102.974 83.3964 98.3449 94.863 97.0482C107.811 95.5843 118.542 98.3531 125.018 104.83C131.271 111.082 131.265 111.046 131.265 149.697C131.265 179.119 131.394 182.768 132.447 183.172C133.097 183.421 138.447 183.625 144.336 183.625C150.226 183.625 155.576 183.421 156.226 183.172C157.28 182.767 157.407 178.91 157.407 147.32V111.922H167.429C172.942 111.922 177.983 111.718 178.633 111.468C180.816 110.631 179.957 107.654 176.64 104.567C158.092 87.301 100.817 36.4907 99.9301 36.5154C99.2945 36.5326 92.2204 42.4519 84.2098 49.6693L69.645 62.7918L69.4471 40.9237C69.3141 26.3118 68.9743 18.7254 68.4215 18.0599C67.3019 16.7102 44.6189 16.6199 43.279 17.9598ZM103.187 102.495C102.998 102.987 102.937 108.923 103.05 115.684L103.256 127.98H114.086H124.917L125.137 122.055C125.399 115.015 124.64 112.857 120.624 109.23C115.741 104.818 104.031 100.296 103.187 102.495ZM89.5248 103.712C84.9567 105.355 82.5195 106.781 79.4751 109.59C76.0042 112.794 75.2468 115.011 75.2468 121.967V128.354H86.4505H97.6542V115.283V102.212L95.6002 102.239C94.4701 102.253 91.7364 102.917 89.5248 103.712ZM75.2468 139.931V147.026H86.4505H97.6542V139.931V132.835H86.4505H75.2468V139.931ZM102.883 139.951V147.066L113.9 146.86L124.917 146.653L125.132 139.744L125.346 132.835H114.115H102.883V139.951Z"></path></svg>
            <p >Website</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="telegram;source=beacons classic"><path d="M28.2307 89.8987C79.5175 66.8612 145.887 38.7737 155.048 34.8862C179.08 24.7112 186.454 26.6612 182.777 49.1945C180.137 65.3903 172.518 119.011 166.446 152.386C162.842 172.178 154.758 174.524 142.047 165.961C135.934 161.84 105.079 141.007 98.3828 136.115C92.2699 131.657 83.839 126.295 94.4123 115.732C98.1747 111.97 122.839 87.9237 142.055 69.207C144.573 66.7487 141.41 62.7112 138.505 64.682C112.604 82.2195 76.6936 106.561 72.1232 109.732C65.2186 114.52 58.5874 116.715 46.6838 113.224C37.6898 110.586 28.904 107.44 25.4843 106.24C12.3157 101.624 15.4416 95.6445 28.2307 89.8987Z"></path></svg>
            <p >Telegram Group</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <Image alt='r' src="https://cdn.beacons.ai/user_content/Q8M80UoXmHO64JA7wUH02ASHUf93/referenced_images/9750b1a1-ee10-43c0-89e0-314ccb268d7e__link-in-bio__links-block__home__0df6f929-09a1-4d2a-99a7-d7d96b7f4968__14538b20-b58b-4a37-943a-e699bbe4e1ec__ec955d7e-e40c-4e71-ae1f-db55bc3afced.png?t=1680709877088" width={30} height={30} className='' />
            <p >Blog</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <Image alt='r' src="https://cdn.beacons.ai/user_content/Q8M80UoXmHO64JA7wUH02ASHUf93/referenced_images/71ba7dde-5394-4287-99d4-535f493a4858__link-in-bio__links-block__home__0df6f929-09a1-4d2a-99a7-d7d96b7f4968__57758b00-6732-4d3f-99b5-f8492413df91__43c99a3b-1417-4e1e-ad20-5f15f828cb9a.png?t=1680710155109" width={30} height={30} className='' />
            <p >Weekly Newsletter</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <Image alt='r' src="https://cdn.beacons.ai/user_content/Q8M80UoXmHO64JA7wUH02ASHUf93/referenced_images/ea479976-3912-4e0a-b99c-4576b8d0c9fb__link-in-bio__links-block__home__0df6f929-09a1-4d2a-99a7-d7d96b7f4968__38c5d0f9-48e9-491f-9f22-4f7f590b4d7a__42673445-2aba-4e4e-a2b2-da90b5877e56.png?t=1680709978285" width={30} height={30} className='' />
            <p >Founder Updates</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="instagram;source=beacons classic"><path d="M65 16.6667H135C161.667 16.6667 183.333 38.3334 183.333 65.0001V135C183.333 147.819 178.241 160.113 169.177 169.177C160.113 178.241 147.819 183.333 135 183.333H65C38.3333 183.333 16.6667 161.667 16.6667 135V65.0001C16.6667 52.1813 21.7589 39.8875 30.8232 30.8233C39.8874 21.759 52.1812 16.6667 65 16.6667ZM63.3333 33.3334C55.3768 33.3334 47.7462 36.4941 42.1201 42.1202C36.494 47.7463 33.3333 55.3769 33.3333 63.3334V136.667C33.3333 153.25 46.75 166.667 63.3333 166.667H136.667C144.623 166.667 152.254 163.506 157.88 157.88C163.506 152.254 166.667 144.623 166.667 136.667V63.3334C166.667 46.7501 153.25 33.3334 136.667 33.3334H63.3333ZM143.75 45.8334C146.513 45.8334 149.162 46.9309 151.116 48.8844C153.069 50.8379 154.167 53.4874 154.167 56.2501C154.167 59.0128 153.069 61.6623 151.116 63.6158C149.162 65.5693 146.513 66.6668 143.75 66.6668C140.987 66.6668 138.338 65.5693 136.384 63.6158C134.431 61.6623 133.333 59.0128 133.333 56.2501C133.333 53.4874 134.431 50.8379 136.384 48.8844C138.338 46.9309 140.987 45.8334 143.75 45.8334ZM100 58.3334C111.051 58.3334 121.649 62.7233 129.463 70.5373C137.277 78.3513 141.667 88.9494 141.667 100C141.667 111.051 137.277 121.649 129.463 129.463C121.649 137.277 111.051 141.667 100 141.667C88.9493 141.667 78.3512 137.277 70.5372 129.463C62.7232 121.649 58.3333 111.051 58.3333 100C58.3333 88.9494 62.7232 78.3513 70.5372 70.5373C78.3512 62.7233 88.9493 58.3334 100 58.3334ZM100 75.0001C93.3696 75.0001 87.0107 77.634 82.3223 82.3224C77.6339 87.0108 75 93.3697 75 100C75 106.631 77.6339 112.989 82.3223 117.678C87.0107 122.366 93.3696 125 100 125C106.63 125 112.989 122.366 117.678 117.678C122.366 112.989 125 106.631 125 100C125 93.3697 122.366 87.0108 117.678 82.3224C112.989 77.634 106.63 75.0001 100 75.0001Z"></path></svg>
            <p >Instagram</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="twitter;source=beacons classic"><path d="M187.167 49.9999C180.75 52.9166 173.833 54.8333 166.667 55.7499C174 51.3333 179.667 44.3333 182.333 35.9166C175.417 40.0833 167.75 42.9999 159.667 44.6666C153.083 37.4999 143.833 33.3333 133.333 33.3333C113.75 33.3333 97.75 49.3333 97.75 69.0833C97.75 71.9166 98.0833 74.6666 98.6667 77.2499C69 75.7499 42.5833 61.4999 25 39.9166C21.9167 45.1666 20.1667 51.3333 20.1667 57.8333C20.1667 70.2499 26.4167 81.2499 36.0833 87.4999C30.1667 87.4999 24.6667 85.8333 19.8333 83.3333C19.8333 83.3333 19.8333 83.3332 19.8333 83.5832C19.8333 100.917 32.1667 115.417 48.5 118.667C45.5 119.5 42.3333 119.917 39.0833 119.917C36.8333 119.917 34.5833 119.667 32.4167 119.25C36.9167 133.333 50 143.833 65.75 144.083C53.5833 153.75 38.1667 159.417 21.3333 159.417C18.5 159.417 15.6667 159.25 12.8333 158.917C28.6667 169.083 47.5 175 67.6667 175C133.333 175 169.417 120.5 169.417 73.2499C169.417 71.6666 169.417 70.1666 169.333 68.5832C176.333 63.5832 182.333 57.2499 187.167 49.9999Z"></path></svg>
            <p >Twitter</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="youtube;source=beacons classic"><path d="M83.3333 125L126.583 100L83.3333 75.0001V125ZM179.667 59.7501C180.75 63.6667 181.5 68.9167 182 75.5834C182.583 82.2501 182.833 88.0001 182.833 93.0001L183.333 100C183.333 118.25 182 131.667 179.667 140.25C177.583 147.75 172.75 152.583 165.25 154.667C161.333 155.75 154.167 156.5 143.167 157C132.333 157.583 122.417 157.833 113.25 157.833L100 158.333C65.0833 158.333 43.3333 157 34.75 154.667C27.25 152.583 22.4166 147.75 20.3333 140.25C19.25 136.333 18.5 131.083 18 124.417C17.4166 117.75 17.1666 112 17.1666 107L16.6666 100C16.6666 81.7501 18 68.3334 20.3333 59.7501C22.4166 52.2501 27.25 47.4167 34.75 45.3334C38.6666 44.2501 45.8333 43.5001 56.8333 43.0001C67.6666 42.4167 77.5833 42.1667 86.75 42.1667L100 41.6667C134.917 41.6667 156.667 43.0001 165.25 45.3334C172.75 47.4167 177.583 52.2501 179.667 59.7501Z"></path></svg>
            <p >Youtube</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="twitter;source=beacons classic"><path d="M187.167 49.9999C180.75 52.9166 173.833 54.8333 166.667 55.7499C174 51.3333 179.667 44.3333 182.333 35.9166C175.417 40.0833 167.75 42.9999 159.667 44.6666C153.083 37.4999 143.833 33.3333 133.333 33.3333C113.75 33.3333 97.75 49.3333 97.75 69.0833C97.75 71.9166 98.0833 74.6666 98.6667 77.2499C69 75.7499 42.5833 61.4999 25 39.9166C21.9167 45.1666 20.1667 51.3333 20.1667 57.8333C20.1667 70.2499 26.4167 81.2499 36.0833 87.4999C30.1667 87.4999 24.6667 85.8333 19.8333 83.3333C19.8333 83.3333 19.8333 83.3332 19.8333 83.5832C19.8333 100.917 32.1667 115.417 48.5 118.667C45.5 119.5 42.3333 119.917 39.0833 119.917C36.8333 119.917 34.5833 119.667 32.4167 119.25C36.9167 133.333 50 143.833 65.75 144.083C53.5833 153.75 38.1667 159.417 21.3333 159.417C18.5 159.417 15.6667 159.25 12.8333 158.917C28.6667 169.083 47.5 175 67.6667 175C133.333 175 169.417 120.5 169.417 73.2499C169.417 71.6666 169.417 70.1666 169.333 68.5832C176.333 63.5832 182.333 57.2499 187.167 49.9999Z"></path></svg>
            <p >Twitter</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg width="25px" height="25px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" aria-label="tiktok;source=beacons classic"><path d="M107.867 13.4255V131.484C107.867 144.526 97.2917 155.092 84.2583 155.092C71.2167 155.092 60.65 144.517 60.65 131.484C60.65 118.442 71.225 107.876 84.2583 107.876V76.3922C53.8333 76.3922 29.1667 101.059 29.1667 131.484C29.1667 161.909 53.8333 186.576 84.2583 186.576C114.683 186.576 139.35 161.909 139.35 131.484V76.3922L141.008 77.2255C150.267 81.8589 160.475 84.2672 170.825 84.2672V52.7755L169.883 52.5422C151.933 48.0589 139.342 31.9255 139.342 13.4255H107.867Z"></path></svg>
            <p >TikTok</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="#FFFFFF" height="25px" width="25px" aria-label="discord;source=beacons classic"><g id="\u56FE\u5C42_2" data-name="\u56FE\u5C42 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"></path></g></g></g></svg>
            <p >Discord</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <Image alt='r' src="https://cdn.beacons.ai/user_content/Q8M80UoXmHO64JA7wUH02ASHUf93/referenced_images/035140c2-17a3-4959-9765-52f3a79a8d0c__link-in-bio__links-block__home__0df6f929-09a1-4d2a-99a7-d7d96b7f4968__3c60374a-6bbe-402c-99ff-d6a0726a73c6__8051b71e-bdd3-4a09-a37d-52189135ccf1.png?t=1680710102169" width={30} height={30} className='' />
            <p >DeFiGram.io</p>
          </div>
          <div className=' flex items-center gap-x-24  justify-start border-white rounded-full  bg-transparent w-full px-2 py-4 border-2  text-white'>
            <div className="flex items-center justify-center rounded-full border" ><Image width="25" height="25" alt="link" src="https://cdn.beacons.ai/user_content/Q8M80UoXmHO64JA7wUH02ASHUf93/referenced_images/f306101f-2736-49a8-963f-5bb65de79cd3__link-in-bio__links-block__home__0df6f929-09a1-4d2a-99a7-d7d96b7f4968__20a0009f-5e5f-4806-909e-e57aba51c796__b791f1eb-fd00-4052-941d-f527eb05a5b2.png?t=1689187727183" className=" object-cover rounded-full" /></div>
            <p >TikTok</p>
          </div>
        </div>
        <div className=' flex flex-col items-center justify-center  mt-8 space-y-3  py-3'>
          <div className=' text-white flex items-center justify-center flex-col space-y-2 py-1 '>
            <h1 className=' text-xl font-bold'>
              Join DeFiGram.io Waitlist
            </h1>
            <p> Be the first to know when the app is out</p>
          </div>
          <Input className=' rounded-full bg-transparent border-2 py-1' placeholder='Email' />
          <Input className=' rounded-full bg-transparent border-2 py-1' placeholder='Telegram Username' />
          <Button className=' rounded-full bg-[#00d0c1] w-full py-1'>
            Submit
          </Button>
        </div>

        <div className=' py-20'>
          <svg viewBox="0 0 998 277" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle3}><path d="M105.425 135.901C142.972 135.901 173.409 105.524 173.409 68.0537C173.409 30.5828 142.972 0.206787 105.425 0.206787C67.8782 0.206787 37.4406 30.5828 37.4406 68.0537C37.4406 105.524 67.8782 135.901 105.425 135.901Z"></path><path d="M227.599 92.6363C246.463 92.6363 261.756 77.3746 261.756 58.5487C261.756 39.7229 246.463 24.4614 227.599 24.4614C208.736 24.4614 193.443 39.7229 193.443 58.5487C193.443 77.3746 208.736 92.6363 227.599 92.6363Z"></path><path d="M34.1563 193.259C53.0203 193.259 68.3126 177.998 68.3126 159.171C68.3126 140.346 53.0203 125.084 34.1563 125.084C15.2923 125.084 0 140.346 0 159.171C0 177.998 15.2923 193.259 34.1563 193.259Z"></path><path d="M219.06 252.584C258.239 252.584 290 220.887 290 181.787C290 142.688 258.239 110.99 219.06 110.99C179.881 110.99 148.12 142.688 148.12 181.787C148.12 220.887 179.881 252.584 219.06 252.584Z"></path><path d="M97.8714 277.167C121.451 277.167 140.567 258.09 140.567 234.558C140.567 211.025 121.451 191.948 97.8714 191.948C74.2913 191.948 55.1759 211.025 55.1759 234.558C55.1759 258.09 74.2913 277.167 97.8714 277.167Z"></path><path d="M415.75 134.3C421.65 135.4 426.5 138.35 430.3 143.15C434.1 147.95 436 153.45 436 159.65C436 165.25 434.6 170.2 431.8 174.5C429.1 178.7 425.15 182 419.95 184.4C414.75 186.8 408.6 188 401.5 188H356.35V83.2999H399.55C406.65 83.2999 412.75 84.4499 417.85 86.7499C423.05 89.0499 426.95 92.2499 429.55 96.3499C432.25 100.45 433.6 105.1 433.6 110.3C433.6 116.4 431.95 121.5 428.65 125.6C425.45 129.7 421.15 132.6 415.75 134.3ZM377.35 126.5H396.55C401.55 126.5 405.4 125.4 408.1 123.2C410.8 120.9 412.15 117.65 412.15 113.45C412.15 109.25 410.8 106 408.1 103.7C405.4 101.4 401.55 100.25 396.55 100.25H377.35V126.5ZM398.5 170.9C403.6 170.9 407.55 169.7 410.35 167.3C413.25 164.9 414.7 161.5 414.7 157.1C414.7 152.6 413.2 149.1 410.2 146.6C407.2 144 403.15 142.7 398.05 142.7H377.35V170.9H398.5Z"></path><path d="M529.987 144.65C529.987 147.65 529.787 150.35 529.387 152.75H468.637C469.137 158.75 471.237 163.45 474.937 166.85C478.637 170.25 483.187 171.95 488.587 171.95C496.387 171.95 501.937 168.6 505.237 161.9H527.887C525.487 169.9 520.887 176.5 514.087 181.7C507.287 186.8 498.937 189.35 489.037 189.35C481.037 189.35 473.837 187.6 467.437 184.1C461.137 180.5 456.187 175.45 452.587 168.95C449.087 162.45 447.337 154.95 447.337 146.45C447.337 137.85 449.087 130.3 452.587 123.8C456.087 117.3 460.987 112.3 467.287 108.8C473.587 105.3 480.837 103.55 489.037 103.55C496.937 103.55 503.987 105.25 510.187 108.65C516.487 112.05 521.337 116.9 524.737 123.2C528.237 129.4 529.987 136.55 529.987 144.65ZM508.237 138.65C508.137 133.25 506.187 128.95 502.387 125.75C498.587 122.45 493.937 120.8 488.437 120.8C483.237 120.8 478.837 122.4 475.237 125.6C471.737 128.7 469.587 133.05 468.787 138.65H508.237Z"></path><path d="M539.915 146.15C539.915 137.75 541.565 130.3 544.865 123.8C548.265 117.3 552.815 112.3 558.515 108.8C564.315 105.3 570.765 103.55 577.865 103.55C584.065 103.55 589.465 104.8 594.065 107.3C598.765 109.8 602.515 112.95 605.315 116.75V104.9H626.465V188H605.315V175.85C602.615 179.75 598.865 183 594.065 185.6C589.365 188.1 583.915 189.35 577.715 189.35C570.715 189.35 564.315 187.55 558.515 183.95C552.815 180.35 548.265 175.3 544.865 168.8C541.565 162.2 539.915 154.65 539.915 146.15ZM605.315 146.45C605.315 141.35 604.315 137 602.315 133.4C600.315 129.7 597.615 126.9 594.215 125C590.815 123 587.165 122 583.265 122C579.365 122 575.765 122.95 572.465 124.85C569.165 126.75 566.465 129.55 564.365 133.25C562.365 136.85 561.365 141.15 561.365 146.15C561.365 151.15 562.365 155.55 564.365 159.35C566.465 163.05 569.165 165.9 572.465 167.9C575.865 169.9 579.465 170.9 583.265 170.9C587.165 170.9 590.815 169.95 594.215 168.05C597.615 166.05 600.315 163.25 602.315 159.65C604.315 155.95 605.315 151.55 605.315 146.45Z"></path><path d="M641.575 146.45C641.575 137.85 643.325 130.35 646.825 123.95C650.325 117.45 655.175 112.45 661.375 108.95C667.575 105.35 674.675 103.55 682.675 103.55C692.975 103.55 701.475 106.15 708.175 111.35C714.975 116.45 719.525 123.65 721.825 132.95H699.175C697.975 129.35 695.925 126.55 693.025 124.55C690.225 122.45 686.725 121.4 682.525 121.4C676.525 121.4 671.775 123.6 668.275 128C664.775 132.3 663.025 138.45 663.025 146.45C663.025 154.35 664.775 160.5 668.275 164.9C671.775 169.2 676.525 171.35 682.525 171.35C691.025 171.35 696.575 167.55 699.175 159.95H721.825C719.525 168.95 714.975 176.1 708.175 181.4C701.375 186.7 692.875 189.35 682.675 189.35C674.675 189.35 667.575 187.6 661.375 184.1C655.175 180.5 650.325 175.5 646.825 169.1C643.325 162.6 641.575 155.05 641.575 146.45Z"></path><path d="M774.109 189.35C766.109 189.35 758.909 187.6 752.509 184.1C746.109 180.5 741.059 175.45 737.359 168.95C733.759 162.45 731.959 154.95 731.959 146.45C731.959 137.95 733.809 130.45 737.509 123.95C741.309 117.45 746.459 112.45 752.959 108.95C759.459 105.35 766.709 103.55 774.709 103.55C782.709 103.55 789.959 105.35 796.459 108.95C802.959 112.45 808.059 117.45 811.759 123.95C815.559 130.45 817.459 137.95 817.459 146.45C817.459 154.95 815.509 162.45 811.609 168.95C807.809 175.45 802.609 180.5 796.009 184.1C789.509 187.6 782.209 189.35 774.109 189.35ZM774.109 171.05C777.909 171.05 781.459 170.15 784.759 168.35C788.159 166.45 790.859 163.65 792.859 159.95C794.859 156.25 795.859 151.75 795.859 146.45C795.859 138.55 793.759 132.5 789.559 128.3C785.459 124 780.409 121.85 774.409 121.85C768.409 121.85 763.359 124 759.259 128.3C755.259 132.5 753.259 138.55 753.259 146.45C753.259 154.35 755.209 160.45 759.109 164.75C763.109 168.95 768.109 171.05 774.109 171.05Z"></path><path d="M878.914 103.7C888.814 103.7 896.814 106.85 902.914 113.15C909.014 119.35 912.064 128.05 912.064 139.25V188H891.064V142.1C891.064 135.5 889.414 130.45 886.114 126.95C882.814 123.35 878.314 121.55 872.614 121.55C866.814 121.55 862.214 123.35 858.814 126.95C855.514 130.45 853.864 135.5 853.864 142.1V188H832.864V104.9H853.864V115.25C856.664 111.65 860.214 108.85 864.514 106.85C868.914 104.75 873.714 103.7 878.914 103.7Z"></path><path d="M963.834 189.35C957.034 189.35 950.934 188.15 945.534 185.75C940.134 183.25 935.834 179.9 932.634 175.7C929.534 171.5 927.834 166.85 927.534 161.75H948.684C949.084 164.95 950.634 167.6 953.334 169.7C956.134 171.8 959.584 172.85 963.684 172.85C967.684 172.85 970.784 172.05 972.984 170.45C975.284 168.85 976.434 166.8 976.434 164.3C976.434 161.6 975.034 159.6 972.234 158.3C969.534 156.9 965.184 155.4 959.184 153.8C952.984 152.3 947.884 150.75 943.884 149.15C939.984 147.55 936.584 145.1 933.684 141.8C930.884 138.5 929.484 134.05 929.484 128.45C929.484 123.85 930.784 119.65 933.384 115.85C936.084 112.05 939.884 109.05 944.784 106.85C949.784 104.65 955.634 103.55 962.334 103.55C972.234 103.55 980.134 106.05 986.034 111.05C991.934 115.95 995.184 122.6 995.784 131H975.684C975.384 127.7 973.984 125.1 971.484 123.2C969.084 121.2 965.834 120.2 961.734 120.2C957.934 120.2 954.984 120.9 952.884 122.3C950.884 123.7 949.884 125.65 949.884 128.15C949.884 130.95 951.284 133.1 954.084 134.6C956.884 136 961.234 137.45 967.134 138.95C973.134 140.45 978.084 142 981.984 143.6C985.884 145.2 989.234 147.7 992.034 151.1C994.934 154.4 996.434 158.8 996.534 164.3C996.534 169.1 995.184 173.4 992.484 177.2C989.884 181 986.084 184 981.084 186.2C976.184 188.3 970.434 189.35 963.834 189.35Z"></path></svg>
        </div>

      </div>

    </div>
  )
}

