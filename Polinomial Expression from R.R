
## Import Library

library(dplyr)


## First data frame
data_for_page2 <- read.csv('data_for_page2.csv',check.names = F,stringsAsFactors = F)
View(data_for_page2)

#generate multiple linear regression model

lm(SalePrice ~ OverallCond + HeatingQC + GrLivArea  + FullBath  + BedroomAbvGr + KitchenQual + GarageCars  ,data=data_for_page2) 


summary(lm(SalePrice ~ OverallCond + HeatingQC + GrLivArea  + FullBath  + BedroomAbvGr + KitchenQual + GarageCars  ,data=data_for_page2))