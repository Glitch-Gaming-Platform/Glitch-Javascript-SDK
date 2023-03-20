class Data {
    
    public static dataURItoBlob(dataURI: string): Blob {
      const byteString = atob(dataURI.split(',')[1]);
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
    
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
    
      const blob = new Blob([ab], { type: mimeString });
      return blob;
    }
  
    public static convertToHHMMSS(time: string | undefined): string | undefined {
      if (!time) {
        return time;
      }
  
      const sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);
  
      if (hours < 10) {
        hours = Number('0' + hours);
      }
      if (minutes < 10) {
        minutes = Number('0' + minutes);
      }
      if (seconds < 10) {
        seconds = Number('0' + seconds);
      }
  
      return `${hours}:${minutes}:${seconds}`;
    }
  }
  
  export default Data;