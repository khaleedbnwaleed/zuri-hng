import React from 'react';

const App = () => {
	return (
		<div className='container'>
			<div className='my-8'>
				<div className='absolute right-16 md:right-1/4 cursor-pointer'>
					<img
						className='hidden md:block'
						src={require('./images/_Avatar share button.png')}
						alt='share'
					/>
					<img
						className='block md:hidden'
						src={require('./images/dots.png')}
						alt='dots'
					/>
				</div>
				<div className='flex flex-col items-center justify-between gap-4'>
					<div className='flex flex-col gap-3 items-center'>
						<img className='w-[90px] h-[90px] rounded-full'
							id='profile_img'
							src={require('./images/user.jpg')}
							alt='profile img'
						/>
						<h1 id='twitter' className='text-[20px] font-bold'>
							Bnwaleed
						</h1>
						<h1 id='slack' className='hidden'>
							bn Waleed
						</h1>
					</div>
					<button className='py-6 bg-[#EAECF0] text-center w-full rounded'>
						<a
							className='text-[18px] font-semibold'
							href='https://twitter.com/bnwaleed_khalid'>
							Twitter Link
						</a>
					</button>
					<button className='py-6 bg-[#EAECF0] text-center w-full rounded'>
						<a
							id='btn_zuri'
							className='text-[18px] font-semibold'
							href='https://training.zuri.team'>
							Zuri Team
						</a>
					</button>
					<button className='py-6 bg-[#EAECF0] text-center w-full rounded'>
						<a
							id='books'
							className='text-[18px] font-semibold'
							href='https://books.zuri.team'>
							Zuri Books
						</a>
					</button>
					<button className='py-6 bg-[#EAECF0] text-center w-full rounded'>
						<a
							id='book_python'
							className='text-[18px] font-semibold'
							href='https://books.zuri.team'>
							Python Books
						</a>
					</button>
					<button className='py-6 bg-[#EAECF0] text-center w-full rounded'>
						<a
							id='pitch'
							className='text-[18px] font-semibold'
							href='https://background.zuri.team'>
							Background Check for Coders
						</a>
					</button>
					<button className='py-6 bg-[#EAECF0] text-center w-full rounded'>
						<a
							id='book_design'
							className='text-[18px] text-center font-semibold'
							href='https://books.zuri.team/design-rules'>
							Design Books
						</a>
					</button>
					<div className='hidden md:flex gap-6'>
						<div className='hover:cursor-pointer'>
							<img src={require('./images/slack.png')} alt='slack' />
						</div>
						<div className='hover:cursor-pointer'>
							<img src={require('./images/Social icon.png')} alt='github' />
						</div>
					</div>
				</div>
			</div>
			<footer className='hidden md:block my-12 py-6 border-t-[1px]'>
				<div className='flex justify-between items-center'>
					<div>
						<img src={require('./images/logo.36d2d48a.png')} alt='logo' />
					</div>
					<div>
						<p className='text-[16px] text-[#667085] font-normal'>
							HNG Internship 9 Frontend Task
						</p>
					</div>
					<div>
						<img src={require('./images/I4G.png')} alt='I4G' />
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
