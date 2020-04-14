// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
var lengthOfLongestSubstring = function(s) {   
    let n = s.length? 1: 0;
        let s_ = '';
        for(let i = 0; i < s.length; i ++) {
            for(let j = 0; j < s_.length; j ++) {
                if(s_[j] == s[i]) {
                    s_ = s_.substring(j + 1);
                    break;
                }
            }
            s_ += s[i];
            n = n > s_.length ? n: s_.length;
        }
        return n;
       
    };