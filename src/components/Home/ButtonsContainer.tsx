import { Button } from 'primereact/button';

export const ButtonsContainer = () => {
    const handleGithub = () => {
        window.open('https://github.com/MarcoEsquivel1' , '_blank');
    }

    const handleCV = () => {
        fetch('CVMarcoEsquivel.pdf').then( response => response.blob()).then( blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'CVMarcoEsquivel.pdf';
            a.click();
        })
    }
    return(
        <div className='buttonsContainer'>
            <Button label="Go to repository" className="button-normal" onClick={handleGithub} icon="pi pi-github" raised />
            <Button label="Download CV" className="button-outlined" onClick={handleCV} icon="pi pi-download" raised />
        </div>
    )
}

