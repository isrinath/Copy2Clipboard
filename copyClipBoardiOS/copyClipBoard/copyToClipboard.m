//
//
//  Copy2ClipBoard
//
//  Created by Srinath Adepu on 08/10/16.
//

#import "copyToClipboard.h"
#import <AudioToolbox/AudioToolbox.h>
#import <UIKit/UIPasteboard.h>
@implementation copyToClipboard


+(NSString*)setTextToClipboard:(NSString *)input
{
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    pasteboard.string = input;
    return input;
}



@end
