import { writeFileSync } from 'fs';
import { join } from 'path';

const path = process.env.PWD + "/logs/error-output.txt";
export class Logger {
    
    public log(logType: string, location: string, message: string): void {

    
        switch(logType){
            case 'info':
            this.info(location, message);
            break;
            case 'error':
            this.error(location, message);
            this.syncWriteFile(path, location + ": " + message);
            break;
            default:
            this.info(location, message);
            break;
        }

    }

    private syncWriteFile(filename: string, data: any) {
        writeFileSync(filename, data, {
          flag: 'w',
        });
      }

    private info(location: string,message: string): void  { console.log(location + '\n' + message); }
    private error(location: string,message: string): void { console.error( location + '\n' +  message); }
}