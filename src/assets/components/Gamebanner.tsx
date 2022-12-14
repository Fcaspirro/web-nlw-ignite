import * as Dialog from '@radix-ui/react-dialog'

interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <div className='relative rounded-lg overflow-hidden cursor-pointer'>
            <img src={props.bannerUrl} alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
                <strong className="font-bold text-white block">{props.title}</strong>
                <span className="text-sm text-zinc-300 block">{props.adsCount} anúncio(s)</span>
            </div>
        </div>
    )
}